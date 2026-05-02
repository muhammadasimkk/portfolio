import { motion } from 'framer-motion'
import { Monitor, Server, Brain, Cloud, BarChart3, Smartphone } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { skillCategories } from '@/data/portfolio'

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Brain,
  Cloud,
  BarChart3,
  Smartphone,
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Skills"
          title="Tech I work with"
          subtitle="A stack built through shipping real products — not just tutorials."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon]
            return (
              <AnimatedSection key={category.name} delay={i * 0.08}>
                <motion.div
                  className="glass glass-hover rounded-2xl p-6 h-full"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${category.color}15` }}
                    >
                      {Icon && <Icon size={17} style={{ color: category.color }} />}
                    </div>
                    <h3 className="text-sm font-semibold text-white">{category.name}</h3>
                  </div>

                  {/* Skills */}
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={skillVariants}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg transition-all duration-200 cursor-default hover:scale-105"
                        style={{
                          backgroundColor: `${category.color}08`,
                          border: `1px solid ${category.color}20`,
                          color: `${category.color}cc`,
                        }}
                        whileHover={{
                          backgroundColor: `${category.color}18`,
                          borderColor: `${category.color}40`,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Horizontal marquee of all tech */}
        <AnimatedSection className="mt-16 overflow-hidden" delay={0.3}>
          <p className="text-xs font-mono text-white/20 text-center mb-6 tracking-widest uppercase">
            Full Technology Stack
          </p>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#08090a] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#08090a] to-transparent z-10" />
            <motion.div
              className="flex gap-4 whitespace-nowrap"
              animate={{ x: [0, -1200] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              {[
                ...skillCategories.flatMap((c) => c.skills),
                ...skillCategories.flatMap((c) => c.skills),
              ].map((skill, i) => (
                <span key={i} className="text-xs font-mono text-white/20 px-3 py-1.5 rounded-full border border-white/[0.05] bg-white/[0.02]">
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
