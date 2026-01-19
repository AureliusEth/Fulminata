import { ConsultationForm } from "@/components/consultation-form"

export function InstitutionalSection() {
  const solutions = [
    {
      title: "Asset Management",
      description:
        "Transform traditional portfolios into tokenized instruments with enhanced liquidity, transparency, and 24/7 settlement capabilities. Our team has direct experience tokenizing $7B+ in assets at Fidelity International.",
    },
    {
      title: "Investment Banking",
      description:
        "Streamline capital markets operations through blockchain-based issuance, settlement, and custody infrastructure. Leverage our Debt Capital Markets and Fixed Income trading experience from Fidelity and BlackRock.",
    },
    {
      title: "Institutional Onboarding",
      description:
        "Comprehensive guidance for financial institutions entering Web3 with compliant, enterprise-grade solutions. From technical due diligence to production deployment, we've built the playbook at Tier 1 institutions.",
    },
    {
      title: "Regulatory Architecture",
      description:
        "Navigate the complex regulatory landscape with battle-tested compliance frameworks. We've implemented ERC3643 security tokens, ONCHAINID identity solutions, and jurisdiction-specific compliance modules.",
    },
  ]

  return (
    <section id="institutional" className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Text */}
          <div>
            <span className="text-sm text-primary tracking-wide">For Institutions</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6 leading-tight">
              Enterprise-Grade Infrastructure for Digital Assets.
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We specialize in bridging traditional finance with decentralized infrastructure. Our battle-tested
              frameworks ensure regulatory compliance, institutional security, and operational scalability for the
              world's leading financial organizations.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Having led tokenization projects at Fidelity International in collaboration with HSBC Orion, JPMorgan
              Onyx, and CitiBank, we understand the unique requirements of institutional adoption. From smart contract
              architecture to KYC/AML integration, we deliver solutions that meet the highest standards of enterprise
              finance.
            </p>

            <ConsultationForm />
          </div>

          {/* Right Column - Solutions List */}
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <div key={index} className="pb-8 border-b border-border last:border-0 last:pb-0">
                <h3 className="text-xl font-medium text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row - Updated with real credentials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border">
          <div>
            <div className="text-3xl md:text-4xl font-light text-foreground">$7B+</div>
            <div className="text-sm text-muted-foreground mt-1">Assets Tokenized</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-light text-foreground">Tier 1</div>
            <div className="text-sm text-muted-foreground mt-1">Institution Pedigree</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-light text-foreground">5+</div>
            <div className="text-sm text-muted-foreground mt-1">Enterprise Deployments</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-light text-foreground">ERC3643</div>
            <div className="text-sm text-muted-foreground mt-1">Compliant Standard</div>
          </div>
        </div>
      </div>
    </section>
  )
}
