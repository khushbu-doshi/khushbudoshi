import Image from 'next/image'
import NavBar from '@/components/composite/NavBar'
import FooterSection from '@/components/sections/FooterSection'
import CivicSidebar from '@/components/composite/CivicSidebar'

export const metadata = {
  title: 'Civic — Khushbu Doshi',
  description:
    'AI Conversation & Dashboard Design — B2G AI startup. Designed batch view + AI email drafting tool, reducing draft cycles by 32%.',
}

// ── Media wrappers ────────────────────────────────────────────────────────

function VideoBox({ src, small = false, className = '', bg = '#D2D9D0', padding = null }) {
  const paddingClass = padding !== null ? padding : (small ? 'p-[15px]' : 'p-[40px]')
  return (
    <div
      className={`rounded-[20px] w-full ${paddingClass} ${className}`}
      style={{ backgroundColor: bg }}
    >
      <video
        src={src}
        autoPlay muted loop playsInline preload="auto"
        className={`w-full block ${small ? 'aspect-video object-contain' : 'h-auto rounded-[10px]'}`}
      />
    </div>
  )
}

function ImageBox({ src, alt, small = false, className = '', bg = '#D2D9D0', crop = false }) {
  return (
    <div
      className={`rounded-[20px] ${small ? 'w-full p-[15px]' : 'w-full p-[40px]'} ${className}`}
      style={{ backgroundColor: bg }}
    >
      {crop ? (
        <div className="w-full overflow-hidden rounded-[10px]">
          <Image
            src={src} alt={alt} width={1200} height={500}
            className="w-full h-[364px] object-cover object-top"
          />
        </div>
      ) : (
        <Image
          src={src} alt={alt} width={1200} height={700}
          className={`w-full block ${small ? 'h-auto rounded-[10px]' : 'h-auto rounded-[10px]'}`}
        />
      )}
    </div>
  )
}

// ── Data ─────────────────────────────────────────────────────────────────

const problems = [
  {
    title: 'Volume > Capacity',
    body: 'Congressional offices receive thousands of emails weekly across various topics, but usually only have 3–4 staffers to process them.',
    bg: 'bg-[#e8e8e8]',
    icon: (
      <svg width="32" height="32" viewBox="0 0 16 16" fill="none" className="shrink-0">
        <path d="M2 4h12v8a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" stroke="#6277f6" strokeWidth="1.3"/>
        <path d="M2 4l6 4.5L14 4" stroke="#6277f6" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Need for accuracy',
    body: "Responses must be factually correct, aligned with the office's positions, and within district scope. Mistakes carry legal, political, or reputational risk.",
    bg: 'bg-[#e8e8e8]',
    icon: (
      <svg width="32" height="32" viewBox="0 0 16 16" fill="none" className="shrink-0">
        <path d="M8 2L3 4.5v3.8C3 11.2 5.2 13.5 8 14.5c2.8-1 5-3.3 5-6.2V4.5L8 2z" stroke="#c2622a" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M8 6.5v2.5" stroke="#c2622a" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="8" cy="11" r="0.6" fill="#c2622a"/>
      </svg>
    ),
  },
  {
    title: 'Context lives across 3 different tools',
    body: 'Staff must cross-reference bills, prior office positions, and news across multiple tools, slowing decision-making.',
    bg: 'bg-[#e8e8e8]',
    icon: (
      <svg width="32" height="32" viewBox="0 0 16 16" fill="none" className="shrink-0">
        <rect x="2" y="2" width="5" height="5" rx="1" stroke="#1a8a4a" strokeWidth="1.3"/>
        <rect x="9" y="2" width="5" height="5" rx="1" stroke="#1a8a4a" strokeWidth="1.3"/>
        <rect x="2" y="9" width="5" height="5" rx="1" stroke="#1a8a4a" strokeWidth="1.3"/>
        <rect x="9" y="9" width="5" height="5" rx="1" stroke="#1a8a4a" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    title: 'No system for prioritization',
    body: 'Without clear district context, staff must manually prioritize emails, causing backlogs and inconsistent responses.',
    bg: 'bg-[#e8e8e8]',
    icon: (
      <svg width="32" height="32" viewBox="0 0 16 16" fill="none" className="shrink-0">
        <path d="M3 4h10M5 8h6M7 12h2" stroke="#7c3aed" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
]


// ── Page ─────────────────────────────────────────────────────────────────

export default function CivicCaseStudy() {
  return (
    <div className="bg-background min-h-screen">
      <NavBar />

      <CivicSidebar />

      <div className="pt-[80px]">
        <main className="max-w-[864px] mx-auto px-6 py-16">

          {/* Title */}
          <div className="mb-12">
            <p className="font-mono text-label text-muted mb-3">CIVIC</p>
            <h1 className="font-body font-medium text-h2 text-foreground mb-4">
              Designed the dashboard and AI email drafter for handling constituent email responses at scale.
            </h1>
          </div>

          {/* Hero video */}
          <VideoBox src="/videos/civic/civic-case-study-hero-video.mp4" className="mb-16" padding="px-[10%] py-[40px]" />

          {/* ── OVERVIEW ── */}
          <section id="overview" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">OVERVIEW</p>
            <h2 className="font-body font-medium text-h2 text-foreground mb-4">
              Civic helps Congressional offices manage, store and collaborate on constituent communications
            </h2>
            <p className="font-body text-body text-foreground/60 mb-10 leading-relaxed">
              Civic is an AI-powered platform for Congressional offices that helps manage the massive volume of daily constituent outreach. As the second design hire, I designed new workflows from 0–1 and built a foundational design system to support rapid feature development in a fast-growing startup.
            </p>
            <div className="grid grid-cols-4 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-mono text-label text-muted mb-3">TEAM</p>
                <ul className="font-body text-body text-foreground/70 space-y-1">
                  <li>Product Manager</li>
                  <li>Front-end Engineer</li>
                  <li>Product Designer (Me!)</li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-label text-muted mb-3">ROLE</p>
                <p className="font-body text-body text-foreground/70">Product Designer</p>
              </div>
              <div>
                <p className="font-mono text-label text-muted mb-3">TIMELINE</p>
                <p className="font-body text-body text-foreground/70">Jan '25 – March '25</p>
              </div>
              <div>
                <p className="font-mono text-label text-muted mb-3">SKILLS</p>
                <ul className="font-body text-body text-foreground/70 space-y-1">
                  <li>Product Research</li>
                  <li>Prototyping</li>
                  <li>Design System</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── PROBLEM SPACE ── */}
          <section id="problem-space" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">PROBLEM SPACE</p>
            <h2 className="font-body font-medium text-h2 text-foreground mb-10">
              Congressional offices receive hundreds of emails with only 2–4 staffers (LCs) to respond to them
            </h2>
            <div className="grid grid-cols-2 gap-5">
              {problems.map((p) => (
                <div key={p.title} className={`${p.bg} rounded-card p-7`}>
                  <div className="flex items-center gap-3 mb-3">
                    {p.icon}
                    <h3 className="font-body font-medium text-[17px] leading-[22px] text-foreground">{p.title}</h3>
                  </div>
                  <p className="font-body text-body text-foreground/60 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── DESIGN PROCESS ── */}
          <section id="design-process" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">RESEARCH + FEATURE DEFINITION</p>

            <p className="font-body text-body text-foreground/60 mb-8 leading-relaxed">
              I started by reviewing existing LC interview transcripts to map the end-to-end process of responding to constituent emails and speaking to the founder and product manager to understand the context
            </p>

            <h2 className="font-body font-medium text-h2 text-foreground mb-8">
              Drafting emails involves finding templates, cross-referencing bills and news and multiple rounds of revision across 3-4 tools
            </h2>

            {/* Drafting flow image — cropped to fill box */}
            <div className="mb-[70px] py-[15px]">
              <ImageBox src="/videos/civic/civic-drafting-process.png" alt="Civic drafting flow process" bg="#E8E8E8" />
            </div>

            {/* HMW */}
            <h2 className="font-body font-medium text-h2 text-foreground mb-4">
              How might we provide the necessary information in one window to avoid constant context switching?
            </h2>
            <p className="font-body text-body text-foreground/60 mb-8 leading-relaxed">
              We identified which problems were most urgent and worth solving first. This allowed us to prioritize features that clearly demonstrated {"Civic's"} value, validate demand, and drive adoption.
            </p>
            <ImageBox src="/videos/civic/civic-research.png" alt="Civic research notes" className="mb-[84px]" bg="#E8E8E8" />

            {/* AI Prototyping */}
            <h2 className="font-body font-medium text-h2 text-foreground mb-4">
              Test and validate features/workflows before refining
            </h2>
            <p className="font-body text-body text-foreground/60 mb-8 leading-relaxed">
              AI prototyping allowed us to move fast, test assumptions early, and focus design and engineering effort only on workflows that showed clear value to potential customers.
            </p>
            <ImageBox src="/videos/civic/civic-figma-make.png" alt="Civic AI prototyping in Figma Make" className="mb-[84px]" bg="#E8E8E8" />

            {/* Design System */}
            <h2 className="font-body font-medium text-h2 text-foreground mb-8">
              Finalizing features and creating a base design system
            </h2>
            <ImageBox src="/videos/civic/civic-design-system.png" alt="Civic design system" bg="#E8E8E8" />
          </section>

          {/* ── SOLUTION ── */}
          <section id="solution" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">SOLUTION</p>

            {/* 1: AI drafting */}
            <div className="mb-[61px]">

              <div className="flex flex-col gap-[73px]">

                {/* AI Drafting Interface */}
                <div>
                  <p className="font-mono text-label text-muted mb-4">AI DRAFTING INTERFACE</p>
                  <div className="flex flex-col gap-5">
                    <IterationCard type="exploration" label="Exploration" title="Chatbot that provides all context needed to draft without context-switching"
                      body="In a keyboard-heavy drafting flow, a chatbot caused a break in flow and increased cognitive load due to visual disturbance.">
                      <ImageBox src="/videos/civic/civic-batches-AI-chatbot.jpg" alt="Side panel chatbot" small className="my-3" />
                    </IterationCard>
                    <IterationCard type="solution" label="Solution"
                      title="Conversational AI embedded directly inside the email drafting window"
                      body="Triggered by keyboard commands, keeping the drafter in flow.">
                      <VideoBox src="/videos/civic/civic-case-study-hero-video.mp4" small className="my-3" />
                    </IterationCard>
                  </div>
                </div>

                {/* Bills & News */}
                <div>
                  <p className="font-mono text-label text-muted mb-4">BILLS & NEWS CONTEXT</p>
                  <div className="flex flex-col gap-5">
                    <IterationCard type="exploration" label="Exploration" title="Surfacing relevant bills/news inside the chat"
                      body="Users had to constantly open and close the bills/news while writing.">
                      <VideoBox src="/videos/civic/civic-bills-i1.mp4" small className="my-3" />
                    </IterationCard>
                    <IterationCard type="solution" label="Solution" title="Surfacing relevant bills on the side of the drafter"
                      body="Always visible, no toggling required.">
                      <VideoBox src="/videos/civic/civic-bills-i2.mp4" small className="my-3" />
                    </IterationCard>
                  </div>
                </div>

                {/* Accountability Checks */}
                <div>
                  <p className="font-mono text-label text-muted mb-4">ACCOUNTABILITY CHECKS</p>
                  <div className="flex flex-col gap-5">
                    <IterationCard type="exploration" label="Exploration" title="Flagging claims or promissory language in a draft"
                      body="Put the pressure on the user to remember a step, which is easy to forget when responding to 50 emails per day, each with 3 steps.">
                      <VideoBox src="/videos/civic/civic-acc-check-i1.mp4" small className="my-3" />
                    </IterationCard>
                    <IterationCard type="solution" label="Solution" title="Automatically flagging claims and promissory language in colour as user types"
                      body="No extra step — accountability is built into the writing experience.">
                      <VideoBox src="/videos/civic/civic-acc-check-i2.mp4" small className="my-3" />
                    </IterationCard>
                  </div>
                </div>

                {/* Rep Stance */}
                <div>
                  <p className="font-mono text-label text-muted mb-4">{"REPRESENTATIVE'S STANCE"}</p>
                  <div className="flex flex-col gap-5">
                    <IterationCard type="exploration" label="Exploration"
                      title="Surfacing an office representative's stance on a particular issue"
                      body="Technically difficult to implement — a rep's voting history can be reliably pulled through an API but their stance is subject to interpretation.">
                      <VideoBox src="/videos/civic/civic-office-rep-stance.mp4" small className="my-3" />
                    </IterationCard>
                    <IterationCard type="solution" label="Solution"
                      title="Surfacing bills and news with representative mentions"
                      body="Gives users enough context to draft the email without requiring interpretation of political stance — no extra feature needed." />
                  </div>
                </div>

                <div>
                <p className="font-mono text-label text-muted mb-4">TEXT SELECTION + AI PROMPT</p>
                <p className="font-body text-body text-foreground/60 leading-relaxed mb-5">
                  Researching writing-heavy tools showed that targeted edits — rewriting a specific sentence without touching the rest — was a common and valued pattern. We brought that in so LCs could prompt AI on exactly the passage they wanted changed, not the whole draft.
                </p>
                <VideoBox src="/videos/civic/civic-text-selection-ai.mp4" />
              </div>
              <div>
                <p className="font-mono text-label text-muted mb-4">KEYBOARD COMMANDS FOR TEMPLATES & COLLABORATION</p>
                <p className="font-body text-body text-foreground/60 leading-relaxed mb-5">
                  {"LCs might use previously approved templates to avoid repetitive work. The user can press 'Cmd+K' to view approved templates related to the topic and press '@' to send a draft for approval or ask for edits — no break in flow."}
                </p>
                <VideoBox src="/videos/civic/civic-keyboard-commands.mp4" />
              </div>

              </div>
            </div>

            {/* 2: Dashboard */}
            <div className="mb-[84px]">
            <p className="font-mono text-label text-muted mb-4">DASHBOARD</p>
              <p className="font-body text-body text-foreground/60 mb-6 leading-relaxed">
                A single-screen triage dashboard that gives legislative staff a real-time pulse on incoming communications, district sentiment, geographic impact, and legislative context — enabling faster, more informed prioritization.
              </p>
              <ImageBox src="/videos/civic/dashboard-final-updated.jpg" alt="Civic dashboard" className="mb-8" />
              <ul className="space-y-3">
                {[
                  'Top metrics & sentiment surface workload status and emerging issues first, reflecting how staff assess urgency before engaging with content.',
                  'The map is central because geography is a primary prioritization filter, helping staff distinguish district-specific concerns from national advocacy campaigns.',
                  "The news feed is structured by Representative, District, State, and National relevance to surface existing positions and explain what's driving constituent outreach.",
                ].map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-brand mt-[3px] shrink-0">–</span>
                    <p className="font-body text-body text-foreground/60 leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3: Batch view */}
            <div className="mb-[84px]">
            <p className="font-mono text-label text-muted mb-4">BATCH VIEW</p>
              <p className="font-body text-body text-foreground/60 mb-6 leading-relaxed">
                In a typical office, legislative staff might assign emails to other employees based on topic and urgency. The batch view has been designed to quickly scan the batch topic, priority level and summary so that assigning becomes easier.
              </p>
              <ImageBox src="/videos/civic/civic-batch-view.jpg" alt="Civic batch view" />
            </div>

          </section>

          {/* ── IMPACT ── */}
          <section id="impact" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">IMPACT</p>
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-card bg-[#eef1fe] p-8">
                <p className="font-body font-semibold text-[48px] leading-none text-brand mb-3">32%</p>
                <p className="font-body font-medium text-[18px] text-foreground mb-3">Fewer Revisions Per Response</p>
                <p className="font-body text-body text-foreground/60 leading-relaxed">
                  By centralizing approved language, surfacing relevant bills and office positions, and structuring the AI drafting flow around real accountability checks, drafts required fewer back-and-forth edits from senior advisors.
                </p>
              </div>
              <div className="rounded-card bg-[#eefef3] p-8">
                <p className="font-body font-semibold text-[48px] leading-none text-[#1a8a4a] mb-3">↑</p>
                <p className="font-body font-medium text-[18px] text-foreground mb-3">Faster Response Time to Constituent Emails</p>
                <p className="font-body text-body text-foreground/60 leading-relaxed">
                  Batch grouping and AI-assisted drafting reduced the time it took to move from intake → draft → approval → send.
                </p>
              </div>
            </div>
          </section>

          {/* ── LEARNINGS ── */}
          <section id="learnings" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">LEARNINGS (Still reflecting...)</p>
            <div className="rounded-card border border-border p-8">
              <h3 className="font-body font-medium text-[20px] text-foreground mb-4">
                Early-stage design is about proving value
              </h3>
              <p className="font-body text-body text-foreground/60 leading-relaxed">
                {"At Civic, the goal wasn't to design everything the product could become, but to prove that the core workflows solved a real, painful problem for offices. Using fast, AI-assisted prototypes helped validate feature direction with potential customers before investing in full design or engineering polish."}
              </p>
            </div>
          </section>

        </main>
      </div>

      <FooterSection />
    </div>
  )
}

function IterationCard({ type, label, title, subtitle, body, children }) {
  return (
    <div className={`rounded-card p-[40px] border ${type === 'exploration' ? 'border-border bg-background' : 'border-brand/20 bg-[#eef1fe]'}`}>
      <span className={`inline-block font-mono text-[11px] font-medium px-2.5 py-1 rounded-full mb-3 ${type === 'exploration' ? 'bg-border text-muted' : 'bg-brand text-background'}`}>
        {label}
      </span>
      <p className="font-body font-medium text-h3 text-foreground leading-snug mb-0">{title}</p>
      {subtitle && (
        <p className="font-body text-body text-foreground/60 mt-2 leading-relaxed">{subtitle}</p>
      )}
      {children}
      <div className="border-l-[3px] border-foreground/25 pl-4 mt-4">
        <p className="font-body font-medium text-[18px] text-foreground/70 leading-snug">{body}</p>
      </div>
    </div>
  )
}
