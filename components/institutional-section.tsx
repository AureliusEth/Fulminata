import { ConsultationForm } from "@/components/consultation-form"

export function InstitutionalSection() {
  const engagementPoints = [
    {
      description:
        "Design tokenised funds, securities, and collateral frameworks aligned with institutional and regulatory standards",
    },
    {
      description:
        "Navigate platform selection, ecosystem integration, and go-to-market strategy for tokenised products",
    },
    {
      description: "Translate regulatory expectations and market structure into workable on-chain architectures",
    },
    {
      description:
        "Connect traditional asset managers with Web3-native distribution, liquidity, and service providers",
    },
    {
      description:
        "Support industry initiatives, consortiums, and white-paper development shaping the future of capital markets",
    },
  ]

  return (
    <section id="institutional" className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-sm text-primary tracking-wide">Client Engagement</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6 leading-tight">
              How Clients Engage Fulminata
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Clients work with Fulminata to:
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Fulminata acts as an independent, senior advisor—helping institutions adopt tokenisation not as a pilot,
              but as durable financial infrastructure.
            </p>

            <ConsultationForm />
          </div>

          <div className="space-y-8">
            {engagementPoints.map((point, index) => (
              <div key={index} className="pb-8 border-b border-border last:border-0 last:pb-0">
                <p className="text-muted-foreground leading-relaxed flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>{point.description}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
