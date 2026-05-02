import { motion } from 'framer-motion'
import { MapPin, Mail, Github, Linkedin, Code2, Cpu, Layers } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { personal, about } from '@/data/portfolio'

const pillars = [
  {
    icon: Code2,
    title: 'Full-Stack',
    description: 'Web, mobile, APIs, and databases — end to end from day one.',
    color: '#22d3ee',
  },
  {
    icon: Cpu,
    title: 'AI-Integrated',
    description: 'LLMs and ML pipelines wired into real products with proper guardrails.',
    color: '#a855f7',
  },
  {
    icon: Layers,
    title: 'Architecture-First',
    description: 'Monorepos, microservices, and shared types built to scale from the start.',
    color: '#3b82f6',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="About me"
          title="Building systems that think"
          subtitle="I turn complex problems into clean, maintainable code — with AI where it adds genuine value."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Bio */}
          <div className="space-y-5">
            {about.bio.map((paragraph, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="left">
                <p className="text-white/60 leading-relaxed text-[0.95rem]">{paragraph}</p>
              </AnimatedSection>
            ))}

            {/* Contact info */}
            <AnimatedSection delay={0.35} direction="left">
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-cyan-400 transition-colors"
                >
                  <Mail size={14} />
                  {personal.email}
                </a>
                <span className="flex items-center gap-2 text-sm text-white/40">
                  <MapPin size={14} />
                  {personal.location}
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} direction="left">
              <div className="flex items-center gap-3 pt-2">
                {[
                  { icon: Github, href: personal.github, label: 'GitHub' },
                  { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-white/[0.08] text-white/50 hover:text-white hover:border-white/20 transition-all"
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Stats + Pillars */}
          <div className="space-y-6">
            {/* Stats */}
            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-3">
                {about.stats.map(({ label, value }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="glass rounded-xl p-5"
                  >
                    <div className="text-2xl font-black text-gradient-cyan-blue mb-1">{value}</div>
                    <div className="text-xs text-white/40">{label}</div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Engineering pillars */}
            <div className="space-y-3">
              {pillars.map(({ icon: Icon, title, description, color }, i) => (
                <AnimatedSection key={title} delay={0.2 + i * 0.1} direction="right">
                  <div className="glass glass-hover rounded-xl p-4 flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${color}15` }}
                    >
                      <Icon size={17} style={{ color }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-0.5">{title}</p>
                      <p className="text-xs text-white/40 leading-relaxed">{description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
