export function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-5xl mb-16">
          <span className="text-sm text-primary tracking-wide">Leadership</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6 leading-tight">
            Leadership & Relevant Experience
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Steve Whyman brings hands-on experience from the forefront of institutional digital asset adoption.
          </p>
        </div>

        <div className="grid lg:grid-cols-[220px_1fr] gap-10 items-start">
          <div className="w-full max-w-[220px]">
            <div className="aspect-square overflow-hidden rounded-lg bg-secondary">
              <img src="/images/image.png" alt="Steve Whyman" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-primary mt-4">Steve Whyman</p>
            <p className="text-xs text-muted-foreground mt-1">Senior Advisor, Capital Markets & Tokenisation</p>
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              He previously served as Head of Debt Capital Markets and Digital Securities at Fidelity International,
              where he led the firm's tokenised money market fund programme, including its application for on-chain
              collateral and settlement use cases.
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
              He has contributed extensively to industry-wide policy, market structure, and infrastructure initiatives,
              including:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span className="text-muted-foreground">
                  Contributor to the International Money Market Fund Association (IMMFA) white paper on the use of
                  tokenisation for collateral efficiency and money market fund innovation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span className="text-muted-foreground">
                  Contributor to Project Guardian, via the International Capital Market Association and the Investment
                  Association
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span className="text-muted-foreground">
                  Co-author of a white paper on financial composability, alongside Dr Ian Hunt, hosted by the
                  Investment Association, examining how modular and interoperable financial infrastructure reshapes
                  capital markets
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span className="text-muted-foreground">
                  Advisor on tokenisation platform strategy and implementation, including collaboration on RFP design
                  and infrastructure selection with Securitize
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span className="text-muted-foreground">
                  Advisor to global asset managers on tokenised share classes, digital fund issuance, and institutional
                  distribution into Web3 ecosystems
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span className="text-muted-foreground">
                  Advisor to RPM Gaming on Web3 strategy within regulated gambling and player-protection frameworks
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span className="text-muted-foreground">
                  Active collaborator with multiple Layer-1 blockchain ecosystems, supporting institutional onboarding,
                  ecosystem design, and real-world asset (RWA) adoption
                </span>
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed text-lg">
              This work combines regulatory realism with practical delivery—bridging policy, product design, and live
              market infrastructure.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid lg:grid-cols-[220px_1fr] gap-10 items-start">
            <div className="w-full max-w-[220px]">
              <div className="aspect-square overflow-hidden rounded-lg bg-secondary">
                <img src="/images/1685372730858.jpg" alt="Matthew Pinnock" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm text-primary mt-4">Matthew Pinnock</p>
              <p className="text-xs text-muted-foreground mt-1">Founding Partner & Technical Lead</p>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Former Lead Blockchain Engineer at Fidelity International's Blockchain Centre of Excellence. Technical
                Lead for Fidelity's tokenization initiatives including collaborations with HSBC Orion, JPMorgan Onyx,
                and CitiBank. Architected and led the deployment of Fidelity's on-chain NAV and the tokenization of a
                $7bn TradFi Money Market Fund.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span className="text-muted-foreground">
                    Led deployment of Fidelity's first digitally native fund token (ERC3643)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span className="text-muted-foreground">Technical Lead for $50M+ AUM tokenized MMF</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span className="text-muted-foreground">
                    5+ years Solidity expertise with ERC3643, EIP-2535 standards
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span className="text-muted-foreground">
                    Solution Architect for institutional blockchain infrastructure
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
