/**
 * Shared header used at the top of every case study page.
 *
 * @param {string} emoji
 * @param {string} title
 * @param {string} description
 * @param {string[]} tags
 * @param {string} role
 * @param {string} timeline
 */
export default function CaseStudyHeader({
  emoji,
  title,
  description,
  tags = [],
  role,
  timeline,
}) {
  return (
    <section className="pt-[120px] pb-16 px-page-x">
      <p className="font-mono text-label text-muted mb-4">{emoji}</p>
      <h1 className="font-body font-medium text-h2 text-foreground mb-4 max-w-3xl">
        {title}
      </h1>
      <p className="font-body text-body text-foreground/55 max-w-2xl mb-8">
        {description}
      </p>

      {(role || timeline) && (
        <div className="flex gap-10 font-body text-body text-muted">
          {role && (
            <div>
              <span className="font-mono text-label block mb-1">ROLE</span>
              {role}
            </div>
          )}
          {timeline && (
            <div>
              <span className="font-mono text-label block mb-1">TIMELINE</span>
              {timeline}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
