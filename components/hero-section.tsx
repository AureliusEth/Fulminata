import { ConsultationForm } from "@/components/consultation-form"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/london-city-skyline-at-dusk-with-the-shard--canary.jpg"
          alt="London financial district skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-20 pt-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            {/* Tagline */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm text-primary tracking-widest uppercase">Web3 Tokenization Consultancy</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] tracking-tight mb-6">
              Paving the Way to Web3.
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl mb-10">
              Institutional adoption of tokenized assets through battle-tested infrastructure. From asset management to
              investment banking, we architect the bridge between traditional finance and decentralized markets.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ConsultationForm 
                buttonText="Schedule Consultation"
                buttonClassName="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base cursor-pointer"
              />
            </div>
          </div>

          {/* Stats Row - Bottom */}
          <div className="flex flex-wrap gap-x-12 gap-y-6 mt-16 pt-8 border-t border-border/50">
            <div>
              <div className="text-3xl md:text-4xl font-light text-foreground">$7B+</div>
              <div className="text-sm text-muted-foreground mt-1">Tokenized at Fidelity</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light text-foreground">Tier 1</div>
              <div className="text-sm text-muted-foreground mt-1">Institution Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light text-foreground">ERC3643</div>
              <div className="text-sm text-muted-foreground mt-1">Compliant Standards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
