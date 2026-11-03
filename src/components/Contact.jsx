
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Github,
  Linkedin,
  FileDown
} from 'lucide-react'

import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolio'

export default function Contact() {
  const subject = encodeURIComponent('Portfolio enquiry')
  const body = encodeURIComponent(
    'Hi Ratnesh,\n\nI would like to discuss an opportunity or project with you.\n\n'
  )

  const mailHref = profile.email
    ? `mailto:${profile.email}?subject=${subject}&body=${body}`
    : null

  return (
    <section
      id="contact"
      className="section-pad section-block contact-section"
    >
      <div className="container">

        <SectionHeading
          index="10"
          eyebrow="RECRUITERS & CLIENTS"
          title={
            <>
              Have an opportunity or project?
              <br />
              <span className="gradient-text">Let's talk.</span>
            </>
          }
          subtitle="For internships, entry-level roles, collaborations or small freelance projects, reach out through LinkedIn or email."
        />

        <div className="contact-grid">

          <Reveal className="contact-aside">
            <h3>
              Let's make
              <br />
              something <span className="gradient-text">useful.</span>
            </h3>

            <p>
              Share a little about the role, problem or outcome you have
              in mind. I'll be happy to discuss whether it's a good fit.
            </p>

            <div className="contact-detail">
              <span><MapPin size={17} /></span>
              <div>
                <small>BASED IN</small>
                <b>{profile.location}</b>
              </div>
            </div>

            {profile.email && (
              <a
                className="contact-detail"
                href={`mailto:${profile.email}`}
              >
                <span><Mail size={17} /></span>
                <div>
                  <small>EMAIL</small>
                  <b>{profile.email}</b>
                </div>
                <ArrowUpRight size={16} />
              </a>
            )}

            <div className="social-row">
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Github />
                </a>
              )}

              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="contact-action-card">
              <span className="panel-label">START A CONVERSATION</span>

              <h3>Tell me what you're working on.</h3>

              <div className="contact-action-links">
                {mailHref ? (
                  <a className="btn btn-primary" href={mailHref}>
                    <Mail size={16} />
                    Email me
                    <ArrowUpRight size={15} />
                  </a>
                ) : profile.linkedin ? (
                  <a
                    className="btn btn-primary"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin size={16} />
                    Message on LinkedIn
                    <ArrowUpRight size={15} />
                  </a>
                ) : null}

                {profile.resumeUrl && (
                  <a
                    className="btn btn-ghost"
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FileDown size={16} />
                    View resume
                  </a>
                )}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
