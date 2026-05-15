'use client'

import Link from 'next/link'
import { useRef, useCallback } from 'react'

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
  const videoRef = useRef(null)
  const liRef    = useRef(null)

  const onEnter = useCallback(() => {
    videoRef.current?.play()
    if (liRef.current) {
      liRef.current.style.transform = 'scale(1.025)'
      liRef.current.style.zIndex   = '10'
    }
  }, [])

  const onLeave = useCallback(() => {
    const v = videoRef.current
    if (v) { v.pause(); v.currentTime = 0 }
    if (liRef.current) {
      liRef.current.style.transform = 'scale(1)'
      liRef.current.style.zIndex   = ''
    }
  }, [])

  return (
    <li
      ref={liRef}
      className="relative bg-background rounded-card shadow-card flex flex-col w-full cursor-pointer overflow-hidden"
      style={{ transition: 'transform 320ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 320ms ease' }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {href && <Link href={href} className="absolute inset-0 z-10" aria-label={title} />}

      {/* Media — top */}
      <div
        className="w-full overflow-hidden"
        style={{ backgroundColor: imageBg, minHeight: `${videoHeight}px` }}
      >
        {video ? (
          <video
            ref={videoRef}
            src={video}
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
