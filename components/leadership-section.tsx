import { Linkedin, Twitter } from "lucide-react"

export function LeadershipSection() {
  const leaders = [
    {
      name: "Stephen Whyman",
      role: "Founding Partner & Capital Markets Lead",
      image: "/images/image.png",
      bio: "Former Head of Debt Capital Markets at Fidelity International with extensive experience in EM Fixed Income trading at BlackRock. Co-led the deployment of Fidelity's first tokenized Money Market Fund, bringing deep institutional capital markets expertise to Web3 infrastructure.",
      credentials: [
        "Former Head of Debt Capital Markets at Fidelity International",
        "EM Fixed Income Trading at BlackRock",
        "Co-deployed Fidelity's first tokenized Money Market Fund",
        "20+ years institutional fixed income experience",
      ],
    },
    {
      name: "Matthew Pinnock",
      role: "Founding Partner & Technical Lead",
      image: "/images/1685372730858.jpg",
      bio: "Former Lead Blockchain Engineer at Fidelity International's Blockchain Centre of Excellence. Technical Lead for Fidelity's tokenization initiatives including collaborations with HSBC Orion, JPMorgan Onyx, and CitiBank. Architected and led the deployment of Fidelity's on-chain NAV and the tokenization of a $7bn TradFi Money Market Fund.",
      credentials: [
        "Led deployment of Fidelity's first digitally native fund token (ERC3643)",
        "Technical Lead for $50M+ AUM tokenized MMF",
        "5+ years Solidity expertise with ERC3643, EIP-2535 standards",
        "Solution Architect for institutional blockchain infrastructure",
      ],
    },
  ]

  return (
    <section id="leadership" className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm text-primary tracking-wide">Leadership</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6 leading-tight">
            Institutional Expertise Meets Web3 Innovation.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Our founding team combines decades of experience at the world's largest asset managers with deep technical
            expertise in blockchain infrastructure. We've led tokenization initiatives at Fidelity, traded fixed income
            at BlackRock, and deployed production-grade smart contracts for institutional clients.
          </p>
        </div>

        {/* Leader Cards */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {leaders.map((leader, index) => (
            <div key={index} className="group">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Image */}
                <div className="w-full lg:w-48 shrink-0">
                  <div className="aspect-square overflow-hidden rounded-lg bg-secondary">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  {/* Social Links */}
                  <div className="flex gap-3 mt-4">
                    <a
                      href="#"
                      className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-foreground">{leader.name}</h3>
                  <p className="text-primary text-sm mt-1 mb-4">{leader.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{leader.bio}</p>

                  {/* Credentials */}
                  <ul className="space-y-2">
                    {leader.credentials.map((credential, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="text-primary mt-1.5">—</span>
                        <span className="text-muted-foreground">{credential}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Track Record Banner */}
        <div className="mt-20 p-8 md:p-12 rounded-lg border border-border bg-background">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                Deployed Fidelity's First Money Market Fund On-Chain
              </h3>
              <p className="text-muted-foreground max-w-2xl">
                Together, our founding team architected and deployed the tokenized infrastructure for one of the world's
                largest asset managers, enabling institutional-grade digital securities with full regulatory compliance.
              </p>
            </div>
            <div className="flex gap-8 shrink-0">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-primary">$7B</div>
                <div className="text-xs text-muted-foreground mt-1">Fund Tokenized</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-primary">$50M+</div>
                <div className="text-xs text-muted-foreground mt-1">AUM Enabled</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
