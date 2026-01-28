import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { InstitutionalSection } from "@/components/institutional-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { LeadershipSection } from "@/components/leadership-section"
import { GamingSection } from "@/components/gaming-section"
import { SolanaSection } from "@/components/solana-section"
import { PartnersSection } from "@/components/partners-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FadeInSection } from "@/components/fade-in-section"

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <FadeInSection>
        <HeroSection />
      </FadeInSection>
      <FadeInSection>
        <AboutSection />
      </FadeInSection>
      <FadeInSection>
        <ServicesSection />
      </FadeInSection>
      <FadeInSection>
        <InstitutionalSection />
      </FadeInSection>
      <FadeInSection>
        <CaseStudiesSection />
      </FadeInSection>
      <FadeInSection>
        <LeadershipSection />
      </FadeInSection>
      <FadeInSection>
        <GamingSection />
      </FadeInSection>
      <FadeInSection>
        <SolanaSection />
      </FadeInSection>
      <FadeInSection>
        <PartnersSection />
      </FadeInSection>
      <FadeInSection>
        <CTASection />
      </FadeInSection>
      <Footer />
    </main>
  )
}
