import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Zap, CheckCircle2, Clock } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { projects, type Project } from '@/data/portfolio'

const statusConfig = {
  production: { label: 'Production', color: '#10b981', icon: CheckCircle2 },
  shipped: { label: 'Shipped', color: '#22d3ee', icon: Zap },
  development: { label: 'In Development', color: '#f59e0b', icon: Clock },
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false)
  const status = statusConfig[project.status]
  const StatusIcon = status.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative rounded-2xl overflow-hidden border transition-all duration-300 ${
        hovered
          ? 'border-white/[0.12] shadow-[0_8px_40px_rgba(0,0,0,0.6)]'
          : 'border-white/[0.06]'
      } ${project.featured ? 'bg-[#0d0e10]' : 'bg-[#0d0e10]/60'}`}
      style={{
        boxShadow: hovered ? `0 0 60px ${project.accentColor}10` : 'none',
      }}
    >
      {/* Gradient top bar */}
      <div
        className={`h-[2px] w-full bg-gradient-to-r ${project.gradient} opacity-0 transition-opacity duration-300`}
        style={{ opacity: hovered ? 1 : 0 }}
      />

      {/* Gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 pointer-events-none`}
        style={{ opacity: hovered ? 0.4 : 0 }}
      />

      <div className="relative p-6 sm:p-7">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md border border-white/[0.08] text-white/40">
                {project.category}
              </span>
              <span
                className="flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-md"
                style={{
                  color: status.color,
                  backgroundColor: `${status.color}12`,
                  border: `1px solid ${status.color}25`,
                }}
              >
                <StatusIcon size={9} />
                {status.label}
              </span>
              {project.featured && (
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400">
                  Featured
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold text-white">{project.name}</h3>
            <p className="text-sm font-medium mt-0.5" style={{ color: project.accentColor }}>
              {project.tagline}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-white/30 hover:text-white/80 border border-transparent hover:border-white/[0.1] hover:bg-white/[0.04] transition-all"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-white/30 hover:text-white/80 border border-transparent hover:border-white/[0.1] hover:bg-white/[0.04] transition-all"
                aria-label="Live demo"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-white/50 leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Highlights */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden mb-5"
            >
              <ul className="space-y-1.5">
                {project.highlights.slice(0, 4).map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-white/50">
                    <ArrowRight size={11} className="mt-0.5 shrink-0" style={{ color: project.accentColor }} />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-white/[0.04] border border-white/[0.06] text-white/40"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built"
          subtitle="From paper-first AI trading systems to mobile fitness apps — production-grade, end to end."
        />

        {/* Featured projects grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}

        {/* Bottom note */}
        <AnimatedSection className="mt-12 text-center" delay={0.2}>
          <p className="text-sm text-white/30">
            Hover any card to see detailed highlights.{' '}
            <a href={`mailto:${''}`} className="text-cyan-400/60 hover:text-cyan-400 transition-colors">
              Get in touch
            </a>{' '}
            for case study deep-dives.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
