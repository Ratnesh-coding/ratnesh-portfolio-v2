import { ArrowUpRight, Award, BriefcaseBusiness, GraduationCap, ExternalLink } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { certifications } from '../data/portfolio'

const categoryIcon = {
  'Internship': BriefcaseBusiness,
  'Job Simulation': BriefcaseBusiness,
  'Certificate': GraduationCap
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad section-block">
      <div className="container">
        <SectionHeading
          index="06"
          eyebrow="CERTIFICATES & EXPERIENCE"
          title={<>Learning never <span className="gradient-text">stops.</span></>}
          subtitle="Professional learning, verified course completions, job simulations, and internship experience."
        />
        <div className="cert-grid">
          {certifications.map((c, i) => {
            const CategoryIcon = categoryIcon[c.category] || Award
            return (
              <Reveal key={c.title} delay={i * 0.06}>
                <article className="cert-card">
                  <div className="cert-top">
                    <span className="cert-icon"><CategoryIcon size={19} /></span>
                    <span className="cert-index">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="cert-category">{c.category}</div>
                  <h3>{c.title}</h3>
                  <p className="cert-issuer">{c.issuer}</p>
                  {c.date && <p className="cert-date">{c.date}</p>}
                  <p className="cert-detail">{c.detail}</p>
                  <div className="cert-bottom">
                    <span>DOCUMENT</span>
                    {c.url ? (
                      <a href={c.url} target="_blank" rel="noreferrer" aria-label={`View ${c.title} certificate`}>
                        View certificate <ExternalLink size={15} />
                      </a>
                    ) : <span className="cert-pending">LINK TO ADD</span>}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
