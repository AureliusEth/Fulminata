import { FileCode, Shield, Workflow, Coins } from "lucide-react"
import { ConsultationForm } from "@/components/consultation-form"

export function ServicesSection() {
  const services = [
    {
      icon: FileCode,
      title: "Smart Contract Architecture",
      description:
        "Production-grade Solidity development with expertise in ERC3643, EIP-2535 (Diamond), and institutional token standards. Gas-optimized, audited, and battle-tested at scale.",
      features: ["ERC3643 Security Tokens", "Upgradeable Contracts", "Gas Optimization", "Formal Verification"],
    },
    {
      icon: Shield,
      title: "Compliance Infrastructure",
      description:
        "On-chain identity and KYC/AML solutions using ONCHAINID and zero-knowledge proofs. We've implemented privacy-preserving verification systems for institutional clients.",
      features: ["ONCHAINID Integration", "ZK-Proof Circuits", "Jurisdiction Modules", "Transfer Restrictions"],
    },
    {
      icon: Workflow,
      title: "Tokenization Strategy",
      description:
        "End-to-end advisory for tokenizing real-world assets including equities, fixed income, real estate, and alternative investments. From legal structuring to technical deployment.",
      features: ["Asset Structuring", "Legal Framework", "Technical Architecture", "Go-to-Market"],
    },
    {
      icon: Coins,
      title: "DeFi Integration",
      description:
        "Bridge tokenized assets to decentralized liquidity. We architect AMM integrations, lending protocols, and yield strategies for institutional-grade digital securities.",
      features: ["DEX Integration", "Liquidity Provision", "Yield Strategies", "Risk Management"],
    },
  ]

  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm text-primary tracking-wide">Our Services</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6">
            End-to-End Tokenization Expertise.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            From initial strategy through production deployment and ongoing support, we provide comprehensive services
            to bring your tokenization vision to life. Our team has architected solutions for some of the world's
            largest asset managers.
          </p>
        </div>

        {/* Service Cards - Grid layout for differentiation */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-medium text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <ConsultationForm 
            buttonText="Discuss Your Project"
            buttonClassName="border-border text-foreground hover:bg-secondary bg-transparent border px-6 py-3 rounded-md cursor-pointer"
          />
        </div>
      </div>
    </section>
  )
}
