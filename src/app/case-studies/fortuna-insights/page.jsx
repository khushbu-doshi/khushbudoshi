import Image from 'next/image'
import NavBar from '@/components/composite/NavBar'
import FooterSection from '@/components/sections/FooterSection'
import CaseStudySidebar from '@/components/composite/CaseStudySidebar'

export const metadata = {
  title: 'Fortuna Insights — Khushbu Doshi',
  description:
    'Synthesized user insights to design workflows for case documentation, collaboration, and AI-assisted analysis in legal tech.',
}

const SECTIONS = [
  { id: 'overview',       label: 'Overview' },
  { id: 'legal-industry', label: 'Litigation Finance' },
  { id: 'user-research',  label: 'User Research' },
  { id: 'defining',       label: 'Defining Problems' },
  { id: 'user-flow',      label: 'User Flow' },
  { id: 'prototypes',     label: 'Final Prototypes' },
  { id: 'whats-next',     label: "What's Next" },
]

// ── Media helpers ─────────────────────────────────────────────────────────

const BG = '#efebf2'

// With background container (for final prototypes / solution screens)
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

// No background — image sits directly on page
function BareImage({ src, alt, className = '' }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      className={`w-full block h-auto rounded-card ${className}`}
    />
  )
}

// With background container (for final prototypes)
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

// ── Page ─────────────────────────────────────────────────────────────────

export default function FortunaInsightsCaseStudy() {
  return (
    <div className="bg-background min-h-screen">
      <NavBar />
      <CaseStudySidebar sections={SECTIONS} />

      <div className="pt-[80px]">
        <main className="max-w-[864px] mx-auto px-6 py-16">

          {/* Title */}
          <div className="mb-12">
            <p className="font-mono text-label text-muted mb-3">FORTUNA INSIGHTS</p>
            <h1 className="font-body font-medium text-h2 text-foreground mb-4">
              Designed case collaboration, AI case analysis, and litigation finance discovery workflows for a legal tech platform
            </h1>
          </div>

          {/* Hero — no background, video fills full width */}
          <VideoBox
            src="https://res.cloudinary.com/dnv5rxyhk/video/upload/v1778789896/fortuna-insights_ppinwf.mp4"
            className="mb-16"
            padding="p-0"
          />

          {/* ── OVERVIEW ── */}
          <section id="overview" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">OVERVIEW</p>
            <h2 className="font-body font-medium text-h2 text-foreground mb-4">
              Law firms struggle with funding discovery, case management, and repetitive work — while litigation funders need structured case data for due diligence
            </h2>
            <p className="font-body text-body text-foreground/60 mb-10 leading-relaxed">
              Fortuna Insights has an AI legal research application called Casecraft — essentially a ChatGPT
              for lawyers targeting the litigation finance industry. On further research, we found the need for
              a legal application that specifically catered to the case management and application process for
              lawyers and firms in litigation finance.
            </p>
            <div className="grid grid-cols-4 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-mono text-label text-muted mb-3">TEAM</p>
                <ul className="font-body text-body text-foreground/70 space-y-1">
                  <li>CTO</li>
                  <li>Founding Designer</li>
                  <li>Product Designer (Me!)</li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-label text-muted mb-3">ROLE</p>
                <p className="font-body text-body text-foreground/70">Product Designer</p>
              </div>
              <div>
                <p className="font-mono text-label text-muted mb-3">TIMELINE</p>
                <p className="font-body text-body text-foreground/70">Jun '24 – Aug '24</p>
              </div>
              <div>
                <p className="font-mono text-label text-muted mb-3">SKILLS</p>
                <ul className="font-body text-body text-foreground/70 space-y-1">
                  <li>Synthesizing User Research</li>
                  <li>Prototyping</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── LEGAL INDUSTRY ── */}
          <section id="legal-industry" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">UNDERSTANDING THE LEGAL INDUSTRY</p>
            <p className="font-body text-body text-foreground/60 mb-10 leading-relaxed">
              As a newcomer to legal tech, I focused on understanding litigation finance and law firm workflows,
              roles, and collaboration models.
            </p>

            {/* No background container */}
            <BareImage
              src="https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778789891/fortuna-insights-litigation-finance_g9mvmu.png"
              alt="Litigation finance industry overview"
              className="mb-12"
            />

            <h2 className="font-body font-medium text-h2 text-foreground mb-8">
              General process of applying for litigation finance
            </h2>
            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  title: '1. Case preparation',
                  body: 'Law firm/attorney conducts legal research, performs due diligence, prepares case documents, arguments (plaintiff and defendant), budget, etc.',
                },
                {
                  title: '2. Application',
                  body: 'Applies for funding. Litigation finance company will then review the case documents.',
                },
                {
                  title: '3. Initial review & Due Diligence',
                  body: 'Signs a confidentiality agreement, enabling the litigation finance company to access additional case information, conduct due diligence, and discuss the merits and costs involved.',
                },
                {
                  title: '4. Monitoring the Case',
                  body: 'Signs a term sheet and monitors the case periodically, providing feedback along the way.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-[#e8e8e8] rounded-card p-7">
                  <h3 className="font-body font-medium text-[17px] leading-snug text-foreground mb-3">{item.title}</h3>
                  <p className="font-body text-body text-foreground/60 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── USER RESEARCH ── */}
          <section id="user-research" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">USER RESEARCH</p>
            <p className="font-body text-body text-foreground/60 mb-4 leading-relaxed">
              Conducted interviews with 32 lawyers across 18 law firms and 10 litigation finance firms to
              uncover gaps in collaboration, task management, and procedural workflows.
            </p>
            <h2 className="font-body font-medium text-h2 text-foreground mb-8">
              Documenting lawyers' daily workflows and researching relevant product features
            </h2>
            <p className="font-body text-body text-foreground/60 mb-10 leading-relaxed">
              We identified which problems were most urgent and worth solving first. This allowed us to
              prioritize features that clearly demonstrated Fortuna's value, validate demand, and drive adoption.
            </p>
            {/* No background container */}
            <BareImage
              src="https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778789895/userResearch_egqlay.jpg"
              alt="User journey chart"
            />
          </section>

          {/* ── DEFINING PROBLEMS ── */}
          <section id="defining" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">DEFINING PROBLEMS</p>
            <p className="font-body text-body text-foreground/60 mb-4 leading-relaxed">
              We had to prioritize which problems to tackle, as we couldn't address them all. We asked ourselves:
            </p>
            <ul className="space-y-2 mb-10">
              {[
                'What tasks did lawyers spend the most time on?',
                "What solutions could we provide that didn't exist in the market? If they did, how could we improvise?",
                'How could we make the whole litigation finance procedure more smooth and less time-consuming?',
              ].map((q) => (
                <li key={q} className="flex gap-2">
                  <span className="text-brand mt-[3px] shrink-0">–</span>
                  <p className="font-body text-body text-foreground/60 leading-relaxed">{q}</p>
                </li>
              ))}
            </ul>
            {/* No background container */}
            <BareImage
              src="/videos/fortuna-insights/problemDefinition.png"
              alt="Problem definition"
            />
          </section>

          {/* ── USER FLOW ── */}
          <section id="user-flow" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">USER FLOW</p>
            <p className="font-body text-body text-foreground/60 mb-10 leading-relaxed">
              We used these pain points as a starting point to define potential flows and features of
              the application.
            </p>
            {/* No background container */}
            <BareImage
              src="https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778789893/userFlow_ddyyeu.png"
              alt="User flow diagram"
            />
          </section>

          {/* ── FINAL PROTOTYPES ── */}
          <section id="prototypes" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">FINAL PROTOTYPES</p>

            <div className="flex flex-col gap-[73px]">

              {/* Collaboration — keep background */}
              <div>
                <h2 className="font-body font-medium text-h2 text-foreground mb-4">
                  Collaboration
                </h2>
                <p className="font-body text-body text-foreground/60 mb-8 leading-relaxed">
                  View ongoing cases, assign cases to people, view case updates, and directly go to the
                  case files.
                </p>
                <VideoBox src="https://res.cloudinary.com/dnv5rxyhk/video/upload/v1778789884/caseCollaboration_lbhez6.mov" />
              </div>

              {/* Apply for funding — keep background */}
              <div>
                <h2 className="font-body font-medium text-h2 text-foreground mb-4">
                  Apply for funding
                </h2>
                <p className="font-body text-body text-foreground/60 mb-8 leading-relaxed">
                  View litigation finance firms best suited to your case, matched by AI. Users can also
                  type in the specialization they're looking for and browse through firms. Tags show what
                  different litigation finance firms specialize in.
                </p>
                <ImageBox
                  src="https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778789887/ApplyForFunding_ddxebw.jpg"
                  alt="Apply for funding screen"
                />
              </div>

              {/* AI Case Summary — keep background */}
              <div>
                <h2 className="font-body font-medium text-h2 text-foreground mb-4">
                  AI Case Summary
                </h2>
                <p className="font-body text-body text-foreground/60 mb-8 leading-relaxed">
                  Summarizing cases so it's easy for litigation finance companies to view important case
                  points while reviewing, saving time for both parties.
                </p>
                <VideoBox src="https://res.cloudinary.com/dnv5rxyhk/video/upload/v1778789885/ai-chatbot_yfpouv.mov" />
              </div>

            </div>
          </section>

          {/* ── WHAT'S NEXT ── */}
          <section id="whats-next" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">WHAT'S NEXT</p>

            <div className="flex flex-col gap-[56px]">

              <div>
                <h2 className="font-body font-medium text-h2 text-foreground mb-4">
                  1. Work in Progress
                </h2>
                <p className="font-body text-body text-foreground/60 leading-relaxed mb-3">
                  We're still working on designing:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    'The litigation finance side of the application',
                    'How law firms/lawyers and litigation finance companies will collaborate once a case has been approved for financing',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-foreground/40 mt-[3px] shrink-0">•</span>
                      <p className="font-body text-body text-foreground/60 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-body text-foreground/60 leading-relaxed">
                  After that, we'll design the high-fidelity prototypes.
                </p>
              </div>

              <div>
                <h2 className="font-body font-medium text-h2 text-foreground mb-4">
                  2. What the future holds
                </h2>
                <p className="font-body text-body text-foreground/60 leading-relaxed">
                  <span className="font-medium text-foreground">Due-diligence:</span>{' '}
                  Currently, law firms use Casecraft to conduct due diligence. In litigation finance, both
                  the law firms and the financing company perform their own due diligence, which, while
                  essential, leads to repetition. This process can be time-consuming. We're developing a
                  solution aimed at reducing this redundancy, allowing both parties to streamline their due
                  diligence efforts, ultimately saving time and accelerating the case review process.
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
