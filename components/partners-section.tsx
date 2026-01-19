import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const partnerLogos: Record<string, string> = {
  Solana: "/images/partners/solana.svg",
  Ethereum: "/images/partners/ethereum.svg",
  Fireblocks: "/images/partners/fireblocks.svg",
  Circle: "/images/partners/circle.svg",
  JPMorgan: "/images/partners/jpmorgan.svg",
  BlackRock: "/images/partners/blackrock.svg",
  Citi: "/images/partners/citi.svg",
  HSBC: "/images/partners/hsbc.svg",
  BNYMellon: "/images/partners/bnymellon.svg",
  StateStreet: "/images/partners/statestreet.svg",
  Fidelity: "/images/partners/fidelity.svg",
  SWIFT: "/images/partners/swift.svg",
}

export function PartnersSection() {
  const partners = [
    { name: "JPMorgan", logo: partnerLogos["JPMorgan"] },
    { name: "BlackRock", logo: partnerLogos["BlackRock"] },
    { name: "Citi", logo: partnerLogos["Citi"] },
    { name: "HSBC", logo: partnerLogos["HSBC"] },
    { name: "BNY Mellon", logo: partnerLogos["BNYMellon"] },
    { name: "State Street", logo: partnerLogos["StateStreet"] },
    { name: "Fidelity", logo: partnerLogos["Fidelity"] },
    { name: "SWIFT", logo: partnerLogos["SWIFT"] },
    { name: "Solana", logo: partnerLogos["Solana"] },
    { name: "Ethereum", logo: partnerLogos["Ethereum"] },
    { name: "Fireblocks", logo: partnerLogos["Fireblocks"] },
    { name: "Circle", logo: partnerLogos["Circle"] },
  ]

  return (
    <section id="ecosystem" className="py-24 bg-card/30">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-sm text-primary tracking-wide">Ecosystem</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6 leading-tight">
            Backed by Industry Leaders.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            The Fulminata Ecosystem represents a strategic alliance of premier partners committed to advancing our
            mission. We work with leading financial institutions and cutting-edge technology providers to deliver
            institutional-grade tokenization solutions.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-20 h-20 rounded-lg bg-background border border-border flex items-center justify-center p-4 hover:border-primary hover:shadow-md transition-all"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-border text-foreground hover:bg-secondary bg-transparent">
            Explore Ecosystem
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
