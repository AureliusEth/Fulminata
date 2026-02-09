import { AnimatedLightning } from "./animated-lightning"

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-sm text-primary tracking-wide">Advisory Experience</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-8 leading-tight">
              Advisory Experience in Tokenisation & Capital Markets
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Fulminata provides senior advisory services to asset managers, financial institutions, market
                infrastructure providers, and Web3-native platforms navigating the institutional adoption of
                tokenisation and digital capital markets.
              </p>

              <p>
                Led by Steve Whyman, Fulminata operates at the intersection of traditional capital markets, regulatory
                frameworks, and blockchain-based financial infrastructure—supporting clients as they design, issue,
                distribute, and scale tokenised financial products in a compliant, commercially viable way.
              </p>

              <p>
                Our work spans fund and security tokenisation, collateral mobility, liquidity architecture, ecosystem
                integration, and institutional distribution into Web3 environments.
              </p>
            </div>
          </div>

          {/* Right - Animated Lightning Visual */}
          <div className="relative flex items-center justify-center min-h-[500px]">
            <AnimatedLightning />
          </div>
        </div>
      </div>
    </section>
  )
}
