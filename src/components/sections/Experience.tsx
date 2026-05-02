import { motion } from 'framer-motion'
import { Briefcase, MapPin, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { experience, education } from '@/data/portfolio'

const typeStyles: Record<string, string> = {
  'full-time': 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  contract: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  freelance: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  internship: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Production delivery, code reviews, and agile collaboration from day one."
          align="left"
        />

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-[17px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/30 via-blue-400/20 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.12} direction="left">
                <div className="sm:pl-14 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 w-[35px] h-[35px] rounded-full bg-[#0d0e10] border border-white/[0.1] flex items-center justify-center hidden sm:flex">
                    <Briefcase size={14} className="text-cyan-400" />
                  </div>

                  <motion.div
                    className="glass glass-hover rounded-2xl p-6 sm:p-7"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span
                            className={`text-[10px] font-medium px-2 py-0.5 rounded-md border capitalize ${typeStyles[exp.type]}`}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm font-medium text-cyan-400">{exp.company}</span>
                          <span className="text-white/20">·</span>
                          <span className="flex items-center gap-1 text-xs text-white/40">
                            <MapPin size={11} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-white/30 shrink-0 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06]">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-white/50 leading-relaxed mb-5">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-5">
                      {exp.achievements.map((achievement, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-white/50">
                          <ArrowRight size={12} className="mt-1 shrink-0 text-cyan-400/60" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-white/[0.04] border border-white/[0.06] text-white/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Education */}
        <AnimatedSection delay={0.35} direction="left">
          <div className="sm:pl-14 relative mt-2">
            <div className="absolute left-0 top-6 w-[35px] h-[35px] rounded-full bg-[#0d0e10] border border-white/[0.1] flex items-center justify-center hidden sm:flex">
              <span className="text-xs text-cyan-400">🎓</span>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/[0.04]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-mono text-white/30 mb-1 tracking-wider uppercase">Education</p>
                  <h3 className="text-base font-bold text-white">{education.degree}</h3>
                  <p className="text-sm text-cyan-400 mt-0.5">{education.institution}</p>
                </div>
                <span className="text-xs font-mono text-white/30 shrink-0 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06]">
                  {education.period}
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
