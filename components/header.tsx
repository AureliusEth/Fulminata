"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ConsultationForm } from "@/components/consultation-form"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 3L4 14h7v7l9-11h-7V3z" />
            </svg>
            <span className="text-lg font-semibold tracking-tight text-foreground">FULMINATA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="#services"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#solana"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Solana
            </Link>
            <Link
              href="#ecosystem"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Ecosystem
            </Link>
            <Link
              href="#leadership"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Leadership
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ConsultationForm 
              buttonText="Get in Touch"
              buttonClassName="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-sm cursor-pointer"
            />
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50 flex flex-col gap-2">
            <Link
              href="#services"
              className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#solana"
              className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solana
            </Link>
            <Link
              href="#ecosystem"
              className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ecosystem
            </Link>
            <Link
              href="#leadership"
              className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Leadership
            </Link>
            <div className="pt-2">
              <ConsultationForm 
                buttonText="Get in Touch"
                buttonClassName="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-sm cursor-pointer"
              />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
