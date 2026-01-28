export function CaseStudiesSection() {
  const caseStudies = [
    {
      label: "Fidelity International",
      title: "First Digitally Native Fund Token",
      description:
        "Led the technical architecture and deployment of Fidelity's first ERC3643 fund token in collaboration with CitiBank. Implemented ONCHAINID for transfer agents, fund admins, and investors.",
      metrics: [
        { value: "$7B", label: "Fund Value" },
        { value: "ERC3643", label: "Standard" },
      ],
      image: "/modern-financial-technology-abstract-dark.jpg",
    },
    {
      label: "Institutional MMF",
      title: "Tokenized Money Market Fund",
      description:
        "Architected the technical infrastructure enabling Matter Labs' $50M investment in a tokenized Institutional Liquidity Fund, deployed in collaboration with Chainlink for on-chain NAV.",
      metrics: [
        { value: "$50M+", label: "AUM Enabled" },
        { value: "24/7", label: "Settlement" },
      ],
      image: "/blockchain-network-visualization-dark-minimal.jpg",
    },
    {
      label: "ICMA x Tokeny",
      title: "Bond Data Taxonomy Standard",
      description:
        "Established the technical on-chain standard for tokenized bonds by implementing the Bond Data Taxonomy as smart contracts in collaboration with the International Capital Markets Authority.",
      metrics: [
        { value: "Global", label: "Standard" },
        { value: "Fixed Income", label: "Asset Class" },
      ],
      image: "/digital-bonds-finance-abstract-dark.jpg",
    },
  ]

  return (
    <section id="case-studies" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="max-w-2xl">
            <span className="text-sm text-primary tracking-wide">Case Studies</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4">Proven Track Record.</h2>
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 gap-8 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Content */}
              <div className="flex flex-col justify-center">
                <span className="text-xs text-primary tracking-wide mb-3">{study.label}</span>
                <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{study.description}</p>

                {/* Metrics with glass effect */}
                <div className="flex gap-6">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="text-2xl font-light text-foreground">{metric.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image with glass overlay */}
              <div className="aspect-[3/2] rounded-xl overflow-hidden bg-secondary relative">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
