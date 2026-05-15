import Image from 'next/image'
import NavBar from '@/components/composite/NavBar'
import FooterSection from '@/components/sections/FooterSection'
import CaseStudySidebar from '@/components/composite/CaseStudySidebar'

export const metadata = {
  title: 'Student Housing — Khushbu Doshi',
  description:
    'Designed a mobile app to help students find housing and roommates using peer insights, safety scores, and location data.',
}

const SECTIONS = [
  { id: 'overview',          label: 'Overview' },
  { id: 'problem-space',     label: 'Problem Space' },
  { id: 'solution',          label: 'Solution' },
  { id: 'research',          label: 'Research' },
  { id: 'findings',          label: 'Findings' },
  { id: 'iteration-1',       label: 'Iteration #1' },
  { id: 'usability-testing', label: 'Usability Testing' },
  { id: 'iteration-2',       label: 'Iteration #2' },
  { id: 'final-screens',     label: 'Final Screens' },
  { id: 'learnings',         label: 'Learnings' },
]

// ── Media helpers ─────────────────────────────────────────────────────────

const BG = '#e3eeff'

function ImageBox({ src, alt, className = '', bg = BG, contain = false }) {
  return (
    <div className={`rounded-card w-full p-[40px] ${className}`} style={{ backgroundColor: bg }}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={700}
        className={`w-full block h-auto rounded-[10px] ${contain ? 'object-contain' : ''}`}
      />
    </div>
  )
}

function MobileGrid({ images }) {
  // images: [{ src, alt, caption }]
  return (
    <div
      className="rounded-card w-full p-8 grid gap-4"
      style={{
        backgroundColor: BG,
        gridTemplateColumns: `repeat(${Math.min(images.length, 4)}, 1fr)`,
      }}
    >
      {images.map(({ src, alt, caption }) => (
        <div key={src} className="flex flex-col items-center gap-3">
          <Image
            src={src}
            alt={alt}
            width={300}
            height={600}
            className="w-full h-auto rounded-[10px] object-contain"
          />
          {caption && (
            <p className="font-body text-label text-foreground/55 text-center leading-snug">
              {caption}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

// ── Problem cards ─────────────────────────────────────────────────────────

const problems = [
  {
    title: 'Lack of information',
    body: 'No reliable information on safety and pricing of various neighborhoods, leaving students to guess.',
    bg: 'bg-[#e8e8e8]',
  },
  {
    title: 'Lack of guidance',
    body: 'Limited guidance on housing processes or knowledge of available resources — especially for first-time international renters.',
    bg: 'bg-[#e8e8e8]',
  },
  {
    title: 'Slow agent response times',
    body: "Agents' long response times cause significant delays in finalizing a house, adding to the anxiety.",
    bg: 'bg-[#e8e8e8]',
  },
  {
    title: 'Switching between apps',
    body: "Students switch between multiple websites and apps when assessing a house's suitability — no single source of truth.",
    bg: 'bg-[#e8e8e8]',
  },
]

// ── Page ─────────────────────────────────────────────────────────────────

export default function StudentHousingCaseStudy() {
  return (
    <div className="bg-background min-h-screen">
      <NavBar />
      <CaseStudySidebar sections={SECTIONS} />

      <div className="pt-[80px]">
        <main className="max-w-[864px] mx-auto px-6 py-16">

          {/* Title */}
          <div className="mb-12">
            <p className="font-mono text-label text-muted mb-3">STUDENT HOUSING</p>
            <h1 className="font-body font-medium text-h2 text-foreground mb-4">
              Designed a mobile app to help students find housing and roommates using peer insights, safety scores, and location data.
            </h1>
          </div>

          {/* Hero */}
          <ImageBox
            src="https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778867697/mockup-student-housing_ufzweq.png"
            alt="Student Housing app hero"
            className="mb-16"
          />

          {/* ── OVERVIEW ── */}
          <section id="overview" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">OVERVIEW</p>
            <h2 className="font-body font-medium text-h2 text-foreground mb-4">
              A 0–1 mobile rental platform focused on trust, safety, and location-driven decision making
            </h2>
            <p className="font-body text-body text-foreground/60 mb-10 leading-relaxed">
              For international students, house hunting is especially stressful — not only because of the
              distance, but due to limited knowledge of the host country's housing market and rental procedures.
              Student Housing brings safety scores, distance filters, roommate matching, and peer reviews into
              one app so students can make informed decisions without the anxiety.
            </p>
            <div className="grid grid-cols-4 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-mono text-label text-muted mb-3">TEAM</p>
                <ul className="font-body text-body text-foreground/70 space-y-1">
                  <li>UX Researcher</li>
                  <li>Frontend Developer</li>
                  <li>UX Designer (Me!)</li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-label text-muted mb-3">ROLE</p>
                <ul className="font-body text-body text-foreground/70 space-y-1">
                  <li>Product Design</li>
                  <li>User Research Analysis</li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-label text-muted mb-3">YEAR</p>
                <p className="font-body text-body text-foreground/70">Aug '25 – Nov '25</p>
              </div>
              <div>
                <p className="font-mono text-label text-muted mb-3">TOOLS</p>
                <ul className="font-body text-body text-foreground/70 space-y-1">
                  <li>Figma</li>
                  <li>Atlas.ti</li>
                  <li>Optimal Testing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── PROBLEM SPACE ── */}
          <section id="problem-space" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">PROBLEM SPACE</p>
            <h2 className="font-body font-medium text-h2 text-foreground mb-4">
              House hunting is stressful. Imagine doing it in a new country with little understanding of the procedures there.
            </h2>
            <p className="font-body text-body text-foreground/60 mb-10 leading-relaxed">
              For international students, house hunting is especially stressful not only because of the distance
              but also due to limited knowledge of the host country's housing market and rental procedures.
              Some of the commonly faced problems are:
            </p>
            <div className="grid grid-cols-2 gap-5">
              {problems.map((p) => (
                <div key={p.title} className={`${p.bg} rounded-card p-7`}>
                  <h3 className="font-body font-medium text-[17px] leading-snug text-foreground mb-3">{p.title}</h3>
                  <p className="font-body text-body text-foreground/60 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SOLUTION ── */}
          <section id="solution" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">SOLUTION</p>
            <h2 className="font-body font-medium text-h2 text-foreground mb-4">
              How might we provide localized information about a city's neighborhoods, rental process, and roommate matching — all in one app?
            </h2>
            <p className="font-body text-body text-foreground/60 mb-10 leading-relaxed">
              Student Housing helps you easily find housing, connect with roommates, check safety scores, and
              calculate travel distances — all in one app. Spend less time (and feel less stress) on your
              house-hunting journey.
            </p>

            <div className="grid grid-cols-2 gap-5 mb-10">
              {[
                {
                  src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778790005/Suggested_listings_nfbjdv.png',
                  alt: 'Map with safety and pricing pins',
                  caption: 'Location icons indicating safety and pricing',
                },
                {
                  src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778789997/Listing_page_pjwqwp.png',
                  alt: 'Listing page with centralized info',
                  caption: 'All housing info — reviews, distance, docs — on one page',
                },
                {
                  src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778789986/Filters_hynx2c.png',
                  alt: 'Distance filter from university',
                  caption: 'Filtering listings based on distance from university',
                },
                {
                  src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778854009/Groups_xwbb2y.png',
                  alt: 'Community groups and chats',
                  caption: 'Creating/joining groups to connect with fellow students',
                },
              ].map(({ src, alt, caption }) => (
                <div key={src} className="rounded-card overflow-hidden" style={{ backgroundColor: BG }}>
                  <div className="px-8 pt-8 pb-4">
                    <Image src={src} alt={alt} width={600} height={700} className="w-full h-auto rounded-[10px] object-contain max-h-[360px]" />
                  </div>
                  <p className="font-body text-body text-foreground/55 leading-snug px-8 pb-7">{caption}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── RESEARCH ── */}
          <section id="research" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">RESEARCH</p>
            <h2 className="font-body font-medium text-h2 text-foreground mb-4">
              Understanding the users
            </h2>
            <p className="font-body text-body text-foreground/60 mb-10 leading-relaxed">
              The goal of the research was to understand the environment and experience of students while
              looking for housing, and to learn which tools and platforms students used — and what problems
              they encountered along the way.
            </p>

            <div className="grid grid-cols-3 gap-5">
              {[
                {
                  heading: 'BEHAVIOURS',
                  items: [
                    'Searched for houses on multiple websites',
                    'Used WhatsApp and Facebook groups to find roommates',
                    'Reached out to their network for advice on pricing and safety',
                  ],
                },
                {
                  heading: 'GOALS',
                  items: [
                    'Find an affordable and safe house close to campus',
                    'Consult with people about various housing aspects',
                  ],
                },
                {
                  heading: 'PAIN POINTS',
                  items: [
                    'No reliable information about safety of neighborhoods',
                    'Going back and forth between websites to check various parameters',
                    'Lack of knowledge of the documents required',
                  ],
                },
              ].map(({ heading, items }) => (
                <div key={heading} className="rounded-card bg-[#f4f6ff] p-6">
                  <p className="font-mono text-label text-muted mb-4">{heading}</p>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-brand mt-[3px] shrink-0">–</span>
                        <p className="font-body text-body text-foreground/70 leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ── FINDINGS ── */}
          <section id="findings" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">FINDINGS</p>
            <ImageBox
              src="https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778790001/studentHousingFindings_d7sxki.png"
              alt="Research findings"
              className="mb-12"
            />
            <h2 className="font-body font-medium text-h2 text-foreground mb-8">
              Outlining personas from the findings
            </h2>
            <div className="grid grid-cols-2 gap-5">
              <Image src="https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778790003/studentHousingPersona1_aiypxq.png" alt="Persona 1" width={600} height={800} className="w-full h-auto rounded-[10px]" />
              <Image src="https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778790004/studentHousingPersona2_xuejqx.png" alt="Persona 2" width={600} height={800} className="w-full h-auto rounded-[10px]" />
            </div>
          </section>

          {/* ── ITERATION 1 ── */}
          <section id="iteration-1" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">ITERATION #1</p>

            <div className="flex flex-col gap-[60px]">
              <div>
                <h2 className="font-body font-medium text-h2 text-foreground mb-6">
                  1. Auto-calculating distance between university and listing address
                </h2>
                <MobileGrid images={[
                  { src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778789981/Iteration1.1_wblqib.png', alt: 'Distance iteration 1.1' }
                ]} />
              </div>

              <div>
                <h2 className="font-body font-medium text-h2 text-foreground mb-6">
                  2. Indicating safety
                </h2>
                <MobileGrid images={[
                  { src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778789987/iteration1.2_hshw1p.png', alt: 'Distance iteration 1.2' },                               
                ]} />
              </div>

              <div>
                <h2 className="font-body font-medium text-h2 text-foreground mb-6">
                  3. All housing related info centralized on one page
                </h2>
                <MobileGrid images={[
                  { src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778789988/Iteration1.3_nbdrmh.png', alt: 'Safety iteration 1.3' },              
                ]} />
              </div>

              <div>
                <h2 className="font-body font-medium text-h2 text-foreground mb-6">
                  4. Saving and comparing listings
                </h2>
                <MobileGrid images={[
                  { src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778789990/iteration1.4_vmo2g4.png', alt: 'Safety iteration 1.4' },
                ]} />
              </div>
            </div>
          </section>

          {/* ── USABILITY TESTING ── */}
          <section id="usability-testing" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">USABILITY TESTING #1</p>
            <p className="font-body text-body text-foreground/60 mb-10 leading-relaxed">
              We conducted usability testing on 16 students. Some of the key takeaways were:
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  title: 'Discoverability',
                  body: '35% of students didn\'t discover our group/chat feature.',
                },
                {
                  title: 'Understanding of features',
                  body: 'The design and denomination of some features weren\'t understood by users.',
                },
                {
                  title: 'Flexibility to edit/save details',
                  body: 'Hesitation to enter university/miles radius info anticipating it cannot be edited. Having to repeat the task of putting filters every time.',
                },
                {
                  title: 'Facilitating sharing & community',
                  body: 'Users are likely to share listings with people for guidance or with potential roommates. How could we facilitate sharing?',
                },
              ].map((item, i) => (
                <div key={item.title} className="rounded-card border border-border p-7">
                  <div className="flex items-baseline gap-2 mb-3">
                    <p className="font-mono text-label text-muted shrink-0">{i + 1}.</p>
                    <h3 className="font-body font-medium text-[17px] text-foreground leading-snug">{item.title}</h3>
                  </div>
                  <p className="font-body text-body text-foreground/60 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── ITERATION 2 ── */}
          <section id="iteration-2" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">ITERATION #2</p>
            <p className="font-body text-body text-foreground/60 mb-10 leading-relaxed">
              Addressing the pain points from Usability Testing #1, our guiding question for the next round
              of iteration was: how could we make the platform more easily understandable, features more
              discoverable, and facilitate sharing?
            </p>

            <div className="flex flex-col gap-[60px]">
              <div>
                <h2 className="font-body font-medium text-h3 text-foreground mb-6">
                  1. Discoverability
                </h2>
                <MobileGrid images={[
                  { src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778789991/iteration2.1_pnqvhi.png', alt: 'Discoverability iteration 2.1' },
                ]} />
              </div>

              <div>
                <h2 className="font-body font-medium text-h3 text-foreground mb-6">
                  2. Flexibility to edit/save details
                </h2>
                <MobileGrid images={[
                  { src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778789993/iteration2.2_oijuoj.png', alt: 'Discoverability iteration 2.2' },
                ]} />
              </div>

              <div className="flex flex-col gap-[40px]">
                <h2 className="font-body font-medium text-h3 text-foreground">
                  3. Facilitating sharing &amp; community
                </h2>

                {/* Sub-section 1 */}
                <div>
                  <h3 className="font-body font-medium text-[17px] text-foreground mb-5">
                    How could we facilitate community, sharing and bring new users to the app?
                  </h3>
                  <MobileGrid images={[
                    { src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778789994/Iteration2.3_xlmvjq.png', alt: 'Community iteration 2.3' },
                  ]} />
                </div>

                {/* Sub-section 2 */}
                <div>
                  <h3 className="font-body font-medium text-[17px] text-foreground mb-5">
                    Putting comments on listings making comparison easier
                  </h3>
                  <ImageBox
                    src="https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778789995/iteration2.4_w2lbay.png"
                    alt="Browsing listings with comments"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ── FINAL SCREENS ── */}
          <section id="final-screens" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">FINAL SCREENS</p>

            <div className="flex flex-col gap-[60px]">
              {[
                { label: '1. Log In / Sign Up',   src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778867416/signup_kfewua.png',           alt: 'Sign up screen' },
                { label: '2. Browsing Listings',  src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778789983/browsingListings_rgxvgj.png', alt: 'Browsing listings screen' },
                { label: '3. Wishlist',            src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778790008/wishlist_ixbr9g.png',         alt: 'Wishlist screen' },
                { label: '4. Chats',               src: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778789984/chats_qpw3dh.png',            alt: 'Chats screen' },
              ].map(({ label, src, alt }) => (
                <div key={label}>
                  <p className="font-mono text-label text-muted mb-5">{label}</p>
                  <ImageBox src={src} alt={alt} />
                </div>
              ))}
            </div>
          </section>

          {/* ── LEARNINGS ── */}
          <section id="learnings" className="mb-[117px] scroll-mt-[80px]">
            <p className="font-mono text-label text-muted mb-6">LEARNINGS</p>

            <div className="flex flex-col gap-5">
              <div className="rounded-card border border-border p-8">
                <h3 className="font-body font-medium text-[20px] text-foreground mb-4">
                  I'm not the user
                </h3>
                <p className="font-body text-body text-foreground/60 leading-relaxed">
                  Being international students ourselves, it was difficult to not think of our own experiences
                  while creating the app. It took us some time to realize that our experience doesn't necessarily
                  have to be somebody else's experience as well. This taught us to stay open to users' feedback.
                </p>
              </div>
              <div className="rounded-card border border-border p-8">
                <h3 className="font-body font-medium text-[20px] text-foreground mb-4">
                  Less is more
                </h3>
                <p className="font-body text-body text-foreground/60 leading-relaxed">
                  Don't try to tackle all user problems with features. It's important to consider the usability
                  of those features and design them in a way that is intuitive. A feature that confuses users
                  is worse than no feature at all.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <p className="font-mono text-label text-muted mb-6">NEXT STEPS</p>
              <ul className="space-y-3">
                {[
                  'Research more about listing agents and what system could be created so that enquiries related to listings are answered in a timely manner.',
                  'Dive deeper into making listings more reliable in terms of the information (photos, amenities) provided by agents/owners so as to increase trustworthiness.',
                  'Make changes from the findings of usability testing #2 to improve the features.',
                ].map((step) => (
                  <li key={step} className="flex gap-3">
                    <span className="text-brand mt-[3px] shrink-0">–</span>
                    <p className="font-body text-body text-foreground/60 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </main>
      </div>

      <FooterSection />
    </div>
  )
}
