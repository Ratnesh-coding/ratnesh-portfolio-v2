# Ratnesh Ramane — Developer Portfolio

A responsive React portfolio built with Vite, Tailwind CSS, Framer Motion, Lucide React, and Lenis. Includes a Node/Express contact API with SMTP email delivery.

## 1. Requirements

- Node.js 20 or newer
- npm

## 2. Install and run the frontend

```bash
npm install
cp .env.example .env
npm run dev
```

Open the Vite URL shown in the terminal (normally http://localhost:5173).

## 3. Configure the contact form backend

In a second terminal:

```bash
cd server
npm install express cors helmet express-rate-limit nodemailer dotenv
cp .env.example .env
```

Edit `server/.env` and provide real SMTP credentials and the destination email address. Then run:

```bash
node index.js
```

The API runs on http://localhost:4000. The frontend's `VITE_API_URL` is configured in the root `.env`. For production, set the frontend API URL to your deployed API URL and set `CLIENT_ORIGIN` to your deployed website origin.

**Important:** The contact form intentionally does not pretend to send messages. It reports an error until SMTP is configured. Keep SMTP credentials only in `server/.env`; never put secrets in frontend variables.

## 4. Personalize your content

Most personal details live in `src/data/portfolio.js`:

- Name, role, location, bio, availability
- Resume, GitHub, LinkedIn, and email URLs
- Skills and project descriptions
- Education and certification records
- Completed experience and activities

Only add verified dates, achievements, certificate verification links, GitHub URLs, and demo URLs. The starter data leaves unknown links empty so the UI does not invent them.

### Add your resume

1. Put your PDF at `public/resume/Ratnesh-Ramane-Resume.pdf`.
2. Set `resumeUrl: '/resume/Ratnesh-Ramane-Resume.pdf'` in `src/data/portfolio.js`.
3. A resume download button can then be enabled in the hero if desired.

### Add real project screenshots

Place optimized WebP images in `public/images/`, then update the relevant project object in `portfolio.js` and the project visual component to render that image. Current project previews are CSS illustrations, not claimed screenshots.

## 5. Build for production

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` directory to Vercel or Netlify. Deploy `server/` separately to a Node hosting provider such as Render, configure its environment variables, and point `VITE_API_URL` to the deployed API before building.

## 6. Notes

- No profile photo, social URL, email address, certificate verification URL, repository URL, live demo, or unverified achievement has been fabricated.
- Contribution statistics are not shown because no GitHub account/API integration has been configured.
- The experience section stays intentionally empty until completed activities are supplied.
- Theme preference is saved in local storage.
- Smooth scrolling and reveal animations respect `prefers-reduced-motion`.
- The project uses semantic sections, keyboard-operable controls, form validation, and responsive layouts.

## 7. Suggested final checks

- Add your real email, GitHub, LinkedIn, and resume.
- Add verified certificate links and project repositories.
- Configure SMTP and test contact delivery from a deployed domain.
- Run Lighthouse on the deployed website and test keyboard navigation and mobile breakpoints.


## Dual-purpose positioning

This portfolio is designed to support both entry-level job applications and carefully scoped freelance enquiries.
The Services section describes capabilities based on the tools used in the listed projects. It does not imply prior paid client experience.
Before publishing, add a professional email address in `src/data/portfolio.js`. The contact section currently uses LinkedIn as the direct contact route until an email is supplied.
