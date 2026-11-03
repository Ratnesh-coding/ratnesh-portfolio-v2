export default function SectionHeading({ eyebrow, title, subtitle, index }) {
  return <div className="section-heading">
    <div><div className="section-eyebrow"><span>{index}</span>{eyebrow}</div><h2>{title}</h2></div>
    {subtitle && <p>{subtitle}</p>}
  </div>
}
