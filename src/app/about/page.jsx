import NavBar from '@/components/composite/NavBar'
import FooterSection from '@/components/sections/FooterSection'
import CaseStudySidebar from '@/components/composite/CaseStudySidebar'

export const metadata = {
  title: 'About — Khushbu Doshi',
  description: "I'm a product designer and a marketer but I'm also a yoga instructor, Lippan artist, a novel ceramicist and an avid traveler. I love art, traveling and people. Here's a brief overview of my journey",
}

// ── Sidebar sections ──────────────────────────────────────────────────────

const SECTIONS = [
  { id: 'ch-01',        label: 'Gap Year'            },
  { id: 'ch-02',        label: 'Started in Marketing' },
  { id: 'ch-03',        label: 'Transition to Design' },
  { id: 'life-photos',  label: 'Life in Photos'       },
  { id: 'work',         label: 'Work Journey So Far'  },
  { id: 'side-projects',label: 'Side Hustles'         },
]

// ── Media helpers ─────────────────────────────────────────────────────────

// Natural-aspect image — no background, no letterbox
function Img({ src, alt, className = '' }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={`w-full block h-auto rounded-[14px] ${className}`} />
}

// Natural-aspect video — no background
function Vid({ src, className = '' }) {
  return (
    <video
      src={src} autoPlay muted loop playsInline preload="auto"
      className={`w-full block h-auto rounded-[14px] ${className}`}
    />
  )
}

// Fixed-height cover container — object-cover, shared height across siblings
function CoverBox({ src, alt, isVideo = false, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-[14px] ${className}`}>
      {isVideo ? (
        <video
          src={src} autoPlay muted loop playsInline preload="auto"
          className="w-full h-full object-cover"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      )}
    </div>
  )
}

// ── Chapter ───────────────────────────────────────────────────────────────
// pt-10 pb-10: inter-chapter gap = pb-10(40px) + pt-10(40px) = 80px
// chapters wrapper mb-10(40px): last chapter pb-10(40px) + mb-10(40px) = 80px → matches all section gaps

function Chapter({ id, heading, body, media, tags }) {
  return (
    <div id={id} className="scroll-mt-[80px]">
      <div className="pt-10 pb-10">
        <h2 className="font-body font-medium text-h2 text-foreground mb-5 leading-snug">{heading}</h2>
        <p className="font-body text-body text-muted leading-relaxed mb-8">{body}</p>
        {media}
        {tags && (
          <div className="flex flex-wrap gap-2 mt-8">
            {tags.map((tag) => (
              <span key={tag} className="font-body text-[13px] px-3 py-[5px] rounded-tag bg-[#efefef] text-[#828282]">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ── Data ─────────────────────────────────────────────────────────────────

const photos = [
  { src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/q_auto,f_auto/v1778790829/acted-in-a-short-movie_g7ot3g.jpg',                 caption: 'Acted in a short film' },
  { src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/q_auto,f_auto/v1778790817/decorating-house-walls-with-lippan-art_ptj9lz.jpg', caption: 'Lippan art, Gujarat'   },
  { src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/q_auto,f_auto/v1778790815/experiments-with-pottery_osignx.jpg',               caption: 'Pottery experiments'   },
  { src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/q_auto,f_auto/v1778790820/learning-surfing_dzlehu.jpg',                       caption: 'Learning to surf'      },
  { src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/q_auto,f_auto/v1778790822/making-a-ring_is3fte.jpg',                          caption: 'Making a ring'         },
  { src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/q_auto,f_auto/v1778790824/soap-business_r4h7ju.jpg',                          caption: 'Soap business'         },
  { src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/q_auto,f_auto/v1778790827/taking-people-on-hikes_wvssy9.png',                 caption: 'Leading hikes'         },
]

const jobs = [
  { company: 'Civic',            role: 'Product Designer',                    date: 'Jan 2025 – Mar 2026' },
  { company: 'Bayer',            role: 'Digital Designer',                    date: 'Jun 2025 – Aug 2025' },
  { company: 'Fortuna Insights', role: 'Product Designer',                    date: 'Jun 2024 – Dec 2024' },
  { company: 'MS HCI, DePaul',   role: 'Graduate Design Assistant',           date: 'Sep 2023 – Nov 2025' },
  { company: 'Darzah',           role: 'Marketing & Communications',          date: 'Apr 2021 – May 2023' },
  { company: 'Univ. of Pune',   role: 'B.B.A., Marketing', date: '2016 – 2019'         },
]

const sideProjects = [
  { emoji: '🌍', name: 'Muses Global',
    desc: 'Organized talks and mentorship sessions connecting people with industry leaders.' },
  { emoji: '🧼', name: 'Soap Business',
    desc: 'Built and ran a small handmade soap brand — product, packaging, and sales.' },
  { emoji: '💬', name: 'Spanish Practice Group',
    desc: 'Created a conversation group with a native Spanish teacher moderator. Members pick a topic and discuss it on a call weekly.' },
]

// Photo strip — 4 visible at once (816px = 4×192 + 3×16)
const PHOTO_W = 192
const GAP     = 16
// Exact translate = 7 items × (192 + 16) = 1456px — avoids the 8px jump from 50% calc
const MARQUEE_TRANSLATE = photos.length * (PHOTO_W + GAP)

// ── Page ─────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <NavBar />
      <CaseStudySidebar sections={SECTIONS} />

      {/*
        Marquee keyframes use a JS-computed pixel value (MARQUEE_TRANSLATE),
        so they live here rather than in globals.css where the value can't be injected.
      */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${MARQUEE_TRANSLATE}px); }
        }
        .marquee-track { animation: marquee 40s linear infinite; will-change: transform; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="pt-[80px]">
        <main className="max-w-[864px] mx-auto px-6 pt-24 pb-16">

          {/* ── Page header — mb-14 = 56px (30% less than 80px) ── */}
          <div className="mb-14">
            <h1 className="font-body font-semibold text-page-h1 text-foreground mb-3">
              Khushbu's Adventures
            </h1>
            <p className="font-body text-body text-muted leading-relaxed">
              I'm a product designer and a marketer but I'm also a yoga instructor, Lippan artist,
              a novel ceramicist and an avid traveler. I love art, traveling and people.
              Here's a brief overview of my journey.
            </p>
          </div>

          {/* ── Chapters — mb-10 so last chapter pb-10 + mb-10 = 80px before next section ── */}
          <div className="mb-10">

            <Chapter
              id="ch-01"
              heading="Gap Year - The Year I Said Yes to Everything"
              body="After my BBA, I took a year off. Traveled through the Himalayas, got certified to teach yoga, learned Lippan art in Gujarat, hitchhiked from Germany to Bulgaria with $300 in my pocket."
              media={
                <div className="flex flex-col gap-3">
                  <Vid src="https://res.cloudinary.com/dnv5rxyhk/video/upload/q_auto/v1778790931/lippan_ln1hcr.mp4" />
                  <div className="grid grid-cols-2 gap-3">
                    <CoverBox src="https://res.cloudinary.com/dnv5rxyhk/video/upload/q_auto/v1778790934/himalayas_tpioyh.mov" isVideo className="h-[320px]" />
                    <CoverBox src="https://res.cloudinary.com/dnv5rxyhk/image/upload/q_auto,f_auto/v1778790935/IMG_4877_xqbxfi.jpg" alt="Himalayas" className="h-[320px]" />
                  </div>
                </div>
              }
              tags={['Himalayas', 'Yoga', 'Lippan art', 'Germany → Bulgaria']}
            />

            <Chapter
              id="ch-02"
              heading="Started in Marketing"
              body="My first job was at Darzah, a lifestyle brand built around Palestinian embroidery. I ran campaigns, managed social, and grew their following by 22% and sales by 16% — because I took the time to truly understand the customer through analytics. That same understanding is what got me asked to redesign the e-commerce store. That redesign is how I found UX."
              media={
                <div className="w-[70%] mx-auto">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-3">
                      <CoverBox src="https://res.cloudinary.com/dnv5rxyhk/image/upload/q_auto,f_auto/v1778825669/1_copy_1_vksgm3.jpg" alt="Darzah product" className="aspect-square" />
                      <CoverBox src="https://res.cloudinary.com/dnv5rxyhk/image/upload/q_auto,f_auto/v1778825670/487480821_4106954609587830_380815673614204718_n_jaanvw.jpg" alt="Darzah" className="aspect-square" />
                    </div>
                    <CoverBox src="https://res.cloudinary.com/dnv5rxyhk/video/upload/q_auto/v1778825567/Sketch-Product_reel_gfeadf.mp4" isVideo className="h-full" />
                  </div>
                </div>
              }
              tags={['Darzah', 'Marketing', 'Brand']}
            />

            <Chapter
              id="ch-03"
              heading="Transition to Design"
              body="The redesign of the e-commerce showed me how UX could drive positive business outcomes, wanted to learn more about UX and enrolled in the MS HCI program at DePaul and spent the next two years studying interaction design while working at startups — Fortuna Insights, Bayer, and Civic. Designing products from 0 to 1."
              media={
                <div className="grid grid-cols-2 gap-3">
                  <CoverBox src="https://res.cloudinary.com/dnv5rxyhk/image/upload/q_auto,f_auto/v1778825706/hackathon_qwgyfs.jpg" alt="Graduation" className="h-[420px]" />
                  <CoverBox src="https://res.cloudinary.com/dnv5rxyhk/image/upload/q_auto,f_auto/v1778825705/graduation_en2rda.jpg" alt="Hackathon" className="h-[420px]" />
                </div>
              }
              tags={['UX', 'Himalayas', 'DePaul HCI']}
            />
          </div>

          {/* ── Life in photos — mb-20 on strip matches all other section gaps ── */}
          <div id="life-photos" className="scroll-mt-[80px]">
            <p className="font-mono text-label uppercase tracking-widest text-muted mb-5">
              Life in photos
            </p>
            <div className="overflow-hidden mb-20">
              <div className="marquee-track flex" style={{ gap: `${GAP}px`, width: 'max-content' }}>
                {[...photos, ...photos].map(({ src, caption }, i) => (
                  <div key={i} className="flex flex-col gap-2 shrink-0" style={{ width: `${PHOTO_W}px` }}>
                    <div className="rounded-[12px] overflow-hidden" style={{ width: `${PHOTO_W}px`, height: 220 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt={caption} className="w-full h-full object-cover" />
                    </div>
                    <p className="font-body text-[12px] leading-snug text-subtle">{caption}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Work experience — mb-20 on table matches section gaps ── */}
          <div id="work" className="scroll-mt-[80px]">
            <p className="font-mono text-label uppercase tracking-widest text-muted mb-6">
              Where I've worked
            </p>
            <div className="border-t border-border mb-20">
              {jobs.map(({ company, role, date }) => (
                <div key={company + date}
                  className="grid grid-cols-[1fr_1fr_180px] items-center gap-x-6 py-[18px] border-b border-border">
                  <span className="font-body text-body text-muted">{company}</span>
                  <span className="font-body font-medium text-body text-foreground">{role}</span>
                  <span className="font-body text-body text-right whitespace-nowrap text-subtle">{date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Side projects ── */}
          <div id="side-projects" className="scroll-mt-[80px]">
            <p className="font-mono text-label uppercase tracking-widest text-muted mb-6">
              Things I've built on the side
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sideProjects.map(({ imgSrc, emoji, name, desc }) => (
                <div key={name} className="bg-background rounded-card p-6 flex flex-col gap-3 border-[0.5px] border-border">
                  <div className="w-10 h-10 rounded-[10px] overflow-hidden shrink-0 bg-[#f2f2f2]">
                    {imgSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-lg">{emoji}</div>
                    )}
                  </div>
                  <p className="font-body font-semibold text-[16px] text-foreground leading-snug">{name}</p>
                  <p className="font-body text-[14px] leading-relaxed text-[#9a9a9a]">{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>

      <div className="mt-20">
        <FooterSection />
      </div>
    </div>
  )
}
