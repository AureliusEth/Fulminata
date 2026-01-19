import { AnimatedLightning } from "./animated-lightning"

export function AboutSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-sm text-primary tracking-wide">About Fulminata</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-8 leading-tight">
              Where Lightning Strikes Twice.
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Fulminata—Latin for "armed with lightning"—represents our approach to institutional blockchain adoption:
                swift, powerful, and transformative. We are a specialized Web3 consultancy founded by veterans of the
                world's leading financial institutions.
              </p>

              <p>
                Our founding team led tokenization initiatives at Fidelity International, architecting the technical
                infrastructure that enabled the deployment of digitally native fund tokens using institutional-grade
                standards like ERC3643. We've collaborated with HSBC Orion, JPMorgan Onyx, and CitiBank on
                groundbreaking projects that bridge traditional finance with decentralized infrastructure.
              </p>

              <p>
                With backgrounds spanning Debt Capital Markets leadership at Fidelity and EM Fixed Income trading at
                BlackRock, we bring a rare combination of deep capital markets expertise and hands-on blockchain
                engineering. This dual perspective allows us to design solutions that satisfy both the technical
                requirements of Web3 and the rigorous compliance standards of institutional finance.
              </p>

              <p>
                Today, Fulminata partners with asset managers, investment banks, and financial institutions seeking to
                tokenize real-world assets, deploy compliant digital securities, and build the infrastructure for the
                next generation of financial markets.
              </p>
            </div>
          </div>

          {/* Right - Animated Lightning Visual - Removed container box, lightning now floats freely */}
          <div className="relative flex items-center justify-center min-h-[500px]">
            <AnimatedLightning />
          </div>
        </div>
      </div>
    </section>
  )
}
