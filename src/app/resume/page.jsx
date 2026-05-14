import NavBar from '@/components/composite/NavBar'
import FooterSection from '@/components/sections/FooterSection'

export const metadata = {
  title: 'Resume — Khushbu Doshi',
  description: 'Resume of Khushbu Doshi, Product Designer & Marketer.',
}

export default function ResumePage() {
  const pdfPath = '/documents/Resume-Doshi-Khushbu.pdf'

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <NavBar />

      <div className="pt-[80px] flex-1 flex flex-col">
        <main className="max-w-[864px] w-full mx-auto px-6 py-10 flex-1 flex flex-col">

          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-muted mb-1">Resume</p>
              <h1 className="font-body font-semibold text-h2 text-foreground">Khushbu Doshi</h1>
            </div>
            <a
              href={pdfPath}
              download
              className="font-body text-[14px] font-medium text-foreground border border-border rounded-pill px-5 py-2 hover:bg-foreground hover:text-background transition-colors"
            >
              Download PDF
            </a>
          </div>

          {/* PDF embed — fills remaining viewport height */}
          <div className="flex-1 rounded-card overflow-hidden border border-border" style={{ minHeight: '70vh' }}>
            <iframe
              src={`${pdfPath}#view=FitH`}
              className="w-full h-full"
              style={{ minHeight: '70vh', border: 'none' }}
              title="Khushbu Doshi Resume"
            />
          </div>

        </main>
      </div>

      <FooterSection />
    </div>
  )
}
