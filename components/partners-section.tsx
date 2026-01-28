import { ConsultationForm } from "@/components/consultation-form"

export function PartnersSection() {
  const partners = [
    { name: "JPMorgan", logo: "/JP_Morgan_logo.png" },
    { name: "BlackRock", logo: "/bkackrock.png" },
    { name: "Citi", logo: "/citibank-4-logo-png-transparent.png" },
    { name: "Goldman Sachs", logo: "/goldman-sachs-logo-png-transparent.png" },
    { name: "Barclays", logo: "/barclays.png" },
    { name: "Fidelity", logo: "/Fidelity Investments.svg" },
    { name: "Solana", logo: "/solana-sol-logo.svg" },
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
              className="w-28 h-28 md:w-32 md:h-32 rounded-lg bg-background border border-border flex items-center justify-center p-5 hover:border-primary hover:shadow-md transition-all"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <ConsultationForm 
            buttonText="Join Our Ecosystem"
            buttonClassName="border-border text-foreground hover:bg-secondary bg-transparent border px-6 py-3 rounded-md cursor-pointer"
          />
        </div>
      </div>
    </section>
  )
}
