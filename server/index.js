import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }))
app.use(express.json({ limit: '20kb' }))
app.use('/api/contact', rateLimit({ windowMs: 15 * 60 * 1000, limit: 5, standardHeaders: true, legacyHeaders: false }))

const clean = value => typeof value === 'string' ? value.trim() : ''
app.get('/api/health', (_req,res) => res.json({ status: 'ok' }))

app.post('/api/contact', async (req,res) => {
  const name = clean(req.body?.name)
  const email = clean(req.body?.email)
  const subject = clean(req.body?.subject)
  const message = clean(req.body?.message)

  if (name.length < 2 || name.length > 80) return res.status(400).json({ message: 'Please enter a name between 2 and 80 characters.' })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) return res.status(400).json({ message: 'Please enter a valid email address.' })
  if (subject.length < 2 || subject.length > 120) return res.status(400).json({ message: 'Please enter a subject.' })
  if (message.length < 10 || message.length > 4000) return res.status(400).json({ message: 'Your message must be between 10 and 4000 characters.' })

  const required = ['SMTP_HOST','SMTP_USER','SMTP_PASS','MAIL_FROM','CONTACT_TO']
  const missing = required.filter(key => !process.env[key])
  if (missing.length) return res.status(503).json({ message: 'Contact email is not configured yet. Please use the published email address instead.' })

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    })
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.CONTACT_TO,
      replyTo: { name, address: email },
      subject: `Portfolio enquiry: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`
    })
    return res.status(200).json({ message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Contact email delivery failed:', error.message)
    return res.status(500).json({ message: 'Message delivery failed. Please try again later.' })
  }
})

const port = Number(process.env.PORT || 4000)
app.listen(port, () => console.log(`Portfolio API listening on port ${port}`))
