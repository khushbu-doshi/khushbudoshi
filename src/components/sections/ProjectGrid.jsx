'use client'

import { useState } from 'react'
import ProjectCard from '../composite/ProjectCard'

const productDesignProjects = [
  {
    emoji: '✨',
    title: 'Civic: AI Conversation & Dashboard Design',
    description:
      'As the second product design hire, I designed workflows for government offices to reply to constituent communications efficiently.',
    href: '/case-studies/civic',
    imageBg: '#eef1fe',
    video: 'https://res.cloudinary.com/dnv5rxyhk/video/upload/v1778790560/civic-case-study-video_k0pnxx.mp4',
    videoHeight: 338,
    videoZoom: 1.35,
  },
  {
    emoji: '🏠',
    title: 'Student Housing: 0-1 mobile design',
    description:
      'Designed a student rental platform focused on trust, safety, and location-driven decision making.',
    href: '/case-studies/student-housing',
    imageBg: '#e3eeff',
    video: 'https://res.cloudinary.com/dnv5rxyhk/video/upload/v1778790563/student-housing-portfolio_otsf2e.mp4',
  },
  {
    emoji: '⚖️',
    title: 'Fortuna Insights: Legal Case Collaboration Workflows',
    description:
      'Synthesized user insights to design workflows for case documentation, collaboration, and AI-assisted analysis.',
    href: '/case-studies/fortuna-insights',
    imageBg: '#f0edff',
    video: 'https://res.cloudinary.com/dnv5rxyhk/video/upload/v1778790561/fortuna-insights_zqotnt.mp4',
  },
]

const marketingProjects = [
  {
    emoji: '💊',
    title: 'Bayer: Digital Marketing & Email Optimization',
    description:
      'Achieved a 12% increase in demo submissions and 6% lift in email open rates through targeted campaign redesign.',
    href: '/case-studies/bayer',
    imageBg: '#f0fdf4',
    video: 'https://res.cloudinary.com/dnv5rxyhk/video/upload/v1778790560/bayer-hero_uk3vwx.mp4',
  },
  {
    emoji: '🎯',
    title: 'Darzah: Brand & Marketing Strategy',
    description:
      'Drove a 16% increase in sales and 40% social media engagement lift through cohesive brand storytelling and email campaigns.',
    href: '/case-studies/darzah',
    imageBg: '#fff3ed',
    video: 'https://res.cloudinary.com/dnv5rxyhk/video/upload/v1778790557/DARZAH-HERO-VIDEO_zgxnnq.mp4',
  },
]

export default function ProjectGrid() {
  const [activeTab, setActiveTab] = useState('design')
  const projects = activeTab === 'design' ? productDesignProjects : marketingProjects

  return (
    <section className="pt-[84px] pb-2.5">
      <div className="max-w-[864px] mx-auto px-6">
        {/* Toggle */}
        <div className="flex items-center gap-[15px] mb-[70px]">
          <button
            onClick={() => setActiveTab('design')}
            className={`h-[45px] w-[190px] rounded-pill px-[14px] py-[9px] font-body font-normal text-[20px] leading-[20px] tracking-[-0.15px] transition-colors ${
              activeTab === 'design' ? 'bg-foreground text-background' : 'text-muted'
            }`}
          >
            Product Design
          </button>
          <button
            onClick={() => setActiveTab('marketing')}
            className={`h-[45px] w-[190px] rounded-pill px-[14px] py-[9px] font-body font-normal text-[20px] leading-[20px] tracking-[-0.15px] transition-colors ${
              activeTab === 'marketing' ? 'bg-foreground text-background' : 'text-muted'
            }`}
          >
            Marketing
          </button>
        </div>

        {/* Cards */}
        <ul className="flex flex-col gap-[72px]">
          {projects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </ul>
      </div>
    </section>
  )
}
