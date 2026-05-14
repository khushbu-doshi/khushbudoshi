import Link from 'next/link'

export default function ProjectCard({
  emoji,
  title,
  description,
  href,
  imageBg = '#f0f4ff',
  image,
  video,
  videoHeight = 260,
  videoZoom = 1,
}) {
  return (
    <li className="relative bg-background rounded-card shadow-card flex flex-col w-full group cursor-pointer overflow-hidden">
      {href && <Link href={href} className="absolute inset-0 z-10" aria-label={title} />}

      {/* Media — top */}
      <div
        className="w-full overflow-hidden"
        style={{ backgroundColor: imageBg, minHeight: `${videoHeight}px` }}
      >
        {video ? (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover project-card-video"
            style={{ minHeight: `${videoHeight}px`, display: 'block', transform: `scale(${videoZoom})`, transformOrigin: 'center center' }}
          />
        ) : image ? (
          <div className="w-full p-5 flex items-center justify-center" style={{ minHeight: '260px' }}>
            {image}
          </div>
        ) : (
          <div className="w-full p-5 flex items-center justify-center" style={{ minHeight: '260px' }}>
            <div className="w-full h-full rounded-card" />
          </div>
        )}
      </div>

      {/* Text — below image */}
      <div className="px-8 py-7">
        <h2 className="font-body font-medium text-h2 text-foreground mb-2">
          {emoji} {title}
        </h2>
        <p className="font-body text-body text-foreground/55 leading-relaxed">{description}</p>
      </div>
    </li>
  )
}
