"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 3L4 14h7v7l9-11h-7V3z" />
            </svg>
            <span className="text-lg font-semibold tracking-tight text-foreground">FULMINATA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Solutions
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
              <ChevronDown className="h-4 w-4" />
            </button>
            <Link
              href="#ecosystem"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Ecosystem
            </Link>
            <Link
              href="#insights"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Insights
            </Link>
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
              <ChevronDown className="h-4 w-4" />
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-border text-foreground hover:bg-secondary bg-transparent"
            >
              Sign Up
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Log In
            </Button>
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
              href="#solutions"
              className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="#services"
              className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="#ecosystem"
              className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Ecosystem
            </Link>
            <Link
              href="#insights"
              className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Insights
            </Link>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1 border-border text-foreground bg-transparent">
                Sign Up
              </Button>
              <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground">
                Log In
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
