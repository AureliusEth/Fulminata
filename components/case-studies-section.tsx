import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-sm text-primary tracking-wide">Case Studies</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4">Proven Track Record.</h2>
          </div>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground self-start md:self-auto">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 gap-8 p-8 rounded-lg border border-border bg-card/30 hover:bg-card/50 transition-colors"
            >
              {/* Content */}
              <div className="flex flex-col justify-center">
                <span className="text-xs text-primary tracking-wide mb-3">{study.label}</span>
                <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{study.description}</p>

                {/* Metrics */}
                <div className="flex gap-8">
                  {study.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="text-2xl font-light text-foreground">{metric.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="aspect-[3/2] rounded-lg overflow-hidden bg-secondary">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
