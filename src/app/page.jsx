import NavBar from '@/components/composite/NavBar'
import HeroSection from '@/components/sections/HeroSection'
import ProjectGrid from '@/components/sections/ProjectGrid'
import AboutSection from '@/components/sections/AboutSection'
import FooterSection from '@/components/sections/FooterSection'

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Fixed top nav */}
      <NavBar />

      {/* Main content — offset for fixed header */}
      <main>
        {/* "Hi, I'm Khushbu / a designer & a marketer" */}
        <HeroSection />

        {/* Product Design / Marketing toggle + project cards */}
        <ProjectGrid />

        {/* About — content pending Figma drop */}
        <AboutSection />
      </main>

      <FooterSection />
    </div>
  )
}
