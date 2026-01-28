import { ConsultationForm } from "@/components/consultation-form"

export function GamingSection() {
  const features = [
    {
      title: "In-Game Asset Tokenization",
      description:
        "Enable true player ownership of virtual items, characters, and collectibles with cross-platform interoperability.",
    },
    {
      title: "Provably Fair Betting",
      description:
        "Transparent, blockchain-verified betting systems that ensure fairness and instant settlement for operators and players.",
    },
    {
      title: "Tournament Infrastructure",
      description:
        "Automated prize distribution through smart contracts with verifiable randomness and compliant payout mechanisms.",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Navigate gaming and gambling regulations across jurisdictions with our specialized legal and technical frameworks.",
    },
  ]

  return (
    <section id="gaming" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm text-primary tracking-wide">Gaming & Entertainment</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6 leading-tight">
            Transforming Digital Entertainment Through Tokenization.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The gaming and gambling industries are being revolutionized by blockchain technology. We help operators and
            developers build next-generation platforms with true asset ownership, transparent operations, and global
            reach.
          </p>
        </div>

        {/* Feature Grid with glass cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                <span className="text-sm text-primary font-medium">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <ConsultationForm 
            buttonText="Explore Gaming Solutions"
            buttonClassName="border-border text-foreground hover:bg-secondary bg-transparent border px-6 py-3 rounded-md cursor-pointer"
          />
        </div>
      </div>
    </section>
  )
}
