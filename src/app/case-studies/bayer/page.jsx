import Image from 'next/image'
import NavBar from '@/components/composite/NavBar'
import FooterSection from '@/components/sections/FooterSection'
import CaseStudySidebar from '@/components/composite/CaseStudySidebar'

export const metadata = {
  title: 'Bayer — Khushbu Doshi',
  description:
    'Achieved a 12% increase in demo submissions and 6% lift in email open rates through targeted campaign redesign.',
}

const SECTIONS = [
  { id: 'overview',           label: 'Overview' },
  {
    id: 'process',
    label: 'Process',
    subItems: [
      { id: 'process-analytics', label: 'Analytics' },
      { id: 'process-journey',   label: 'Customer Journey' },
      { id: 'process-audit',     label: 'UX & Content Audit' },
      { id: 'process-behaviour', label: 'Customer Behaviour' },
    ],
  },
  { id: 'marketing-strategy', label: 'Marketing Strategy' },
  { id: 'final-designs',      label: 'Final Redesigns' },
  { id: 'impact',             label: 'Impact' },
]

// ── Media helpers ─────────────────────────────────────────────────────────

const BG = '#c1d5e7'

function VideoBox({ src, className = '', bg = BG, padding = 'p-[40px]' }) {
  return (
    <div className={`rounded-card w-full ${padding} ${className}`} style={{ backgroundColor: bg }}>
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full block h-auto rounded-[10px]"
      />
    </div>
  )
}

function ImageBox({ src, alt, className = '', bg = BG }) {
  return (
    <div className={`rounded-card w-full p-[40px] ${className}`} style={{ backgroundColor: bg }}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        className="w-full block h-auto rounded-[10px]"
      />
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────

export default function BayerCaseStudy() {
  return (
    <div className="bg-background min-h-screen">
      <NavBar />
      <CaseStudySidebar sections={SECTIONS} />

      <div className="pt-[80px]">
        <main className="max-w-[864px] mx-auto px-6 py-16">

          {/* Title */}
          <div className="mb-12">
            <p className="font-mono text-label text-muted mb-3">BAYER</p>
            <h1 className="font-body font-medium text-h2 text-foreground mb-4">
              Designing and marketing strategy for email and web experiences
            </h1>
          </div>

          {/* Hero */}
          <VideoBox
            src="/videos/bayer/bayer-hero.mp4"
            className="mb-16"
            padding="p-0"
          />

          {/* ── OVERVIEW ── */}
          <section id="overview" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">OVERVIEW</p>
            <h2 className="font-body font-medium text-h2 text-foreground mb-4">
              Improving UX and content of the email-to-website flow to increase brand trust, engagement, and demo requests
            </h2>
            <p className="font-body text-body text-foreground/60 mb-10 leading-relaxed">
              Bayer's Calantic platform is a curated marketplace of clinically validated AI applications for
              radiology teams in hospitals. All apps are provided through a system that makes the installation
              and deployment of these apps more secure and faster. My role was to improve the email and web
              experience to drive meaningful engagement and increase demo bookings.
            </p>
            <div className="grid grid-cols-4 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-mono text-label text-muted mb-3">TEAM</p>
                <ul className="font-body text-body text-foreground/70 space-y-1">
                  <li>1 Product Manager</li>
                  <li>1 Marketing Manager</li>
                  <li>1 Design Strategist (Me!)</li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-label text-muted mb-3">ROLE</p>
                <p className="font-body text-body text-foreground/70">Product Designer</p>
              </div>
              <div>
                <p className="font-mono text-label text-muted mb-3">TIMELINE</p>
                <p className="font-body text-body text-foreground/70">June '25 – Sep '25</p>
              </div>
              <div>
                <p className="font-mono text-label text-muted mb-3">SKILLS</p>
                <ul className="font-body text-body text-foreground/70 space-y-1">
                  <li>Marketing Strategy</li>
                  <li>UX Design</li>
                  <li>Content Design</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── PROCESS ── */}
          <section id="process" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">PROCESS</p>

            {/* a. Analytics */}
            <div id="process-analytics" className="mb-[73px] scroll-mt-[80px]">
              <h2 className="font-body font-medium text-h2 text-foreground mb-4">
                a. Email and website analytics
              </h2>
              <p className="font-body text-body text-foreground/60 mb-8 leading-relaxed">
                I analyzed email campaign metrics like open rates, click-through rates, subject lines, and
                top-performing website pages. Additionally, I conducted competitor analysis and researched
                email best practices to enhance our content.
              </p>

              {/* Statistical */}
              <div className="mb-8">
                <h3 className="font-body font-medium text-h3 text-foreground mb-5">Statistical</h3>
                <ol
                  className="grid grid-cols-2 gap-x-12 gap-y-5"
                  style={{ gridAutoFlow: 'column', gridTemplateRows: 'auto auto' }}
                >
                  {[
                    { bold: 'Short subject lines', rest: ' with relevant keywords had high open rates at 22%' },
                    { bold: 'Event pages', rest: ' had the second highest number of visits' },
                    { bold: 'Educational emails', rest: ' had the highest click rates at 4.8%' },
                    { bold: 'Resources page', rest: ' had high engagement at 3 min per session' },
                  ].map(({ bold, rest }, i) => (
                    <li key={i} className="font-body text-body text-foreground/60 leading-relaxed list-decimal list-inside">
                      <span className="font-medium text-foreground">{bold}</span>{rest}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Behavioural */}
              <div>
                <h3 className="font-body font-medium text-h3 text-foreground mb-5">Behavioural</h3>
                <ol
                  className="grid grid-cols-2 gap-x-12 gap-y-5"
                  style={{ gridAutoFlow: 'column', gridTemplateRows: 'auto' }}
                >
                  {[
                    { bold: "Subject lines with numerics", rest: ' had higher open rates' },
                    { bold: "CTAs written in first person", rest: ' had higher click rates' },
                  ].map(({ bold, rest }, i) => (
                    <li key={i} className="font-body text-body text-foreground/60 leading-relaxed list-decimal list-inside">
                      <span className="font-medium text-foreground">{bold}</span>{rest}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* b. Customer Journey */}
            <div id="process-journey" className="mb-[73px] scroll-mt-[80px]">
              <h2 className="font-body font-medium text-h2 text-foreground mb-6">
                b. Tracing customer journey
              </h2>
              <ImageBox
                src="/videos/bayer/customer-journey.png"
                alt="Customer journey flow"
              />
            </div>

            {/* c. UX Audit */}
            <div id="process-audit" className="mb-[73px] scroll-mt-[80px]">
              <h2 className="font-body font-medium text-h2 text-foreground mb-6">
                c. Auditing email and website content + UX
              </h2>
              <ImageBox
                src="/videos/bayer/ux-audit.png"
                alt="Email flow strategy"
                className="mb-5"
              />
            </div>

            {/* d. Customer Behaviour */}
            <div id="process-behaviour" className="scroll-mt-[80px]">
              <h2 className="font-body font-medium text-h2 text-foreground mb-4">
                d. Understanding customer behavior and objectives
              </h2>
              <p className="font-body text-body text-foreground/60 mb-8 leading-relaxed">
                Marketing qualified leads (MQLs) received from events consisted of radiologists, radiology
                administrators, and IT staff of healthcare centres. Calantic's platform was used by radiologists
                and radiology administrators for different purposes and was installed by IT staff. It was
                important to understand each group's goals and pain points, and personalize email campaigns
                accordingly.
              </p>
              <ImageBox
                src="/videos/bayer/customerBehaviour.jpg"
                alt="Customer behaviour segments"
              />
            </div>
          </section>

          {/* ── MARKETING STRATEGY ── */}
          <section id="marketing-strategy" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">MARKETING STRATEGY</p>
            <p className="font-body text-body text-foreground/60 mb-10 leading-relaxed">
              Since customers had diverse goals, we personalized email content and subject lines for different
              segments. Alongside a general email, we designed behavior-based emails to build trust and drive
              meaningful engagement.
            </p>

            <div className="flex flex-col gap-[60px]">
              <div>
                <p className="font-mono text-label text-muted mb-3">GENERAL FLOW</p>
                <h2 className="font-body font-medium text-h2 text-foreground mb-6">
                  Aim: Create brand trust, meaningful engagement and encourage demo bookings
                </h2>
                <ImageBox
                  src="/videos/bayer/EmailFlowStrategyCalantic.jpg"
                  alt="General email flow strategy"
                />
              </div>

              <div>
                <p className="font-mono text-label text-muted mb-3">BEHAVIOURAL FLOW</p>
                <h2 className="font-body font-medium text-h2 text-foreground mb-6">
                  Aim: Letting customers show us their interests and reacting accordingly for sustained, meaningful engagement
                </h2>
                <ImageBox
                  src="/videos/bayer/BehaviouralEmailFlowCalantic.jpg"
                  alt="Behavioural email flow"
                />
              </div>
            </div>
          </section>

          {/* ── FINAL DESIGNS ── */}
          <section id="final-designs" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">FINAL DESIGNS</p>

            <div className="flex flex-col gap-[60px]">
              <div>
                <h2 className="font-body font-medium text-h2 text-foreground mb-6">
                  Email designs
                </h2>
                <ImageBox
                  src="/videos/bayer/emailFlowBayer.png"
                  alt="Email designs"
                />
              </div>

              <div>
                <h2 className="font-body font-medium text-h2 text-foreground mb-6">
                  Web page redesigns
                </h2>
                <ImageBox
                  src="/videos/bayer/websiteRedesigns.png"
                  alt="Website redesigns"
                />
              </div>
            </div>
          </section>

          {/* ── IMPACT ── */}
          <section id="impact" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">IMPACT</p>
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-card bg-[#eef1fe] p-8">
                <p className="font-body font-semibold text-[48px] leading-none text-brand mb-3">6%</p>
                <p className="font-body font-medium text-[18px] text-foreground mb-3">Increase in Email Open Rates</p>
                <p className="font-body text-body text-foreground/60 leading-relaxed">
                  We A/B tested with various subject lines, resources, and layouts for the 3 customer groups
                  and saw a significant increase in open rates by 6% over a period of 3 months of testing.
                </p>
              </div>
              <div className="rounded-card bg-[#eefef3] p-8">
                <p className="font-body font-semibold text-[48px] leading-none text-[#1a8a4a] mb-3">4.5%</p>
                <p className="font-body font-medium text-[18px] text-foreground mb-3">Increase in Demo Bookings</p>
                <p className="font-body text-body text-foreground/60 leading-relaxed">
                  By making the demo request submission process easier and making the follow-up steps easy to
                  follow, there was a 4.5% increase in demo bookings.
                </p>
              </div>
            </div>
          </section>

        </main>
      </div>

      <FooterSection />
    </div>
  )
}
