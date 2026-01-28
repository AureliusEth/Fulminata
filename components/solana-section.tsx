import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedSolanaLogo } from "./animated-solana-logo"

export function SolanaSection() {
  const features = [
    {
      title: "Strategic Partnership with KEEL",
      description:
        "KEEL is Solana's Capital Engine—powering growth and stability across DeFi and tokenized markets with up to $2.5 billion in capital allocation. Our partnership connects your tokenization initiatives directly to institutional-grade liquidity and infrastructure.",
    },
    {
      title: "Asset Migration to Solana",
      description:
        "Seamlessly migrate existing tokenized assets and RWAs to Solana, leveraging its high throughput, sub-second finality, and low-cost architecture for enhanced performance and broader DeFi integration.",
    },
    {
      title: "Native Tokenization Initiatives",
      description:
        "Launch new tokenization projects directly on Solana with our end-to-end support—from token design and smart contract development to compliance, DeFi liquidity bootstrapping, and go-to-market strategy.",
    },
    {
      title: "DeFi & RWA Ecosystem Access",
      description:
        "Tap into Solana's leading DeFi protocols and tokenized asset markets with our technical guidance, ensuring your tokenized assets achieve maximum interoperability, liquidity depth, and yield opportunities.",
    },
  ]

  return (
    <section id="solana" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <span className="text-sm text-primary tracking-wide">Solana Ecosystem</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6 leading-tight">
              Opening the Gates to Solana.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Through our strategic partnership with KEEL—Solana's Capital Engine—Fulminata is helping institutions 
              and enterprises access the full potential of the Solana blockchain. We combine deep ecosystem knowledge, 
              technical excellence, and proven tokenization expertise to accelerate your entry into DeFi and tokenized 
              asset markets on one of the world's fastest-growing networks.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center justify-center md:pt-8">
            <AnimatedSolanaLogo className="w-32 md:w-40 lg:w-48" />
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
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
          <Button variant="outline" className="border-border text-foreground hover:bg-secondary bg-transparent">
            Explore Solana Solutions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
