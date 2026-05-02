import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'
import { personal } from '@/data/portfolio'

const socials = [
  { icon: Github, href: personal.github, label: 'GitHub' },
  { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: personal.twitter, label: 'Twitter' },
  { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#08090a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-mono text-sm font-medium mb-1">
              <span className="text-gradient">mba</span>
              <span className="text-white/30">.dev</span>
            </div>
            <p className="text-xs text-white/30">
              Designed & built by Muhammad Bin Asim
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-lg text-white/40 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs text-white/30 hover:text-white/70 transition-colors group"
          >
            Back to top
            <span className="p-1.5 rounded border border-white/[0.08] group-hover:border-white/20 transition-colors">
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
