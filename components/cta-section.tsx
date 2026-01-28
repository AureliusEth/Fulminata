import { ConsultationForm } from "@/components/consultation-form"

export function CTASection() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Glass panel container */}
        <div className="text-center p-10 md:p-16 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
          <span className="text-sm text-primary tracking-wide">Get Started</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6 leading-tight">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Join the leading financial institutions already leveraging tokenization to unlock new opportunities. Our team
            is ready to guide your transformation.
          </p>

          <div className="flex items-center justify-center">
            <ConsultationForm />
          </div>

          {/* Info Row with glass cards */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg mx-auto">
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-lg font-medium text-foreground">24-48hrs</div>
              <div className="text-xs text-muted-foreground mt-1">Response Time</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-lg font-medium text-foreground">Free</div>
              <div className="text-xs text-muted-foreground mt-1">Initial Assessment</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-lg font-medium text-foreground">Global</div>
              <div className="text-xs text-muted-foreground mt-1">Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
