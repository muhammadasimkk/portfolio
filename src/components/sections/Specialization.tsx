import { motion } from 'framer-motion'
import { Brain, Layers, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { specializations } from '@/data/portfolio'

function SpecCard({
  data,
  icon: Icon,
  gradient,
  borderColor,
  index,
}: {
  data: typeof specializations.ai
  icon: React.ElementType
  gradient: string
  borderColor: string
  index: number
}) {
  return (
    <AnimatedSection delay={index * 0.15} direction={index === 0 ? 'left' : 'right'}>
      <motion.div
        className="relative rounded-2xl p-7 sm:p-8 border border-white/[0.07] bg-[#0d0e10] overflow-hidden h-full"
        whileHover={{ y: -4, borderColor }}
        transition={{ duration: 0.25 }}
      >
        {/* Gradient bg */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-40 pointer-events-none`}
        />

        <div className="relative z-10">
          {/* Icon + title */}
          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${borderColor}15`, border: `1px solid ${borderColor}25` }}
            >
              <Icon size={22} style={{ color: borderColor }} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{data.title}</h3>
              <p className="text-sm mt-0.5" style={{ color: `${borderColor}99` }}>
                {data.subtitle}
              </p>
            </div>
          </div>

          <p className="text-sm text-white/50 leading-relaxed mb-7">{data.description}</p>

          {/* Capabilities */}
          <ul className="space-y-3">
            {data.capabilities.map((cap, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                className="flex items-start gap-3 text-sm text-white/60"
              >
                <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: borderColor }} />
                {cap}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

export default function Specialization() {
  return (
    <section id="specialization" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb w-[500px] h-[500px] bg-cyan-400 absolute -top-20 left-1/4 opacity-[0.04]" />
        <div className="orb w-[400px] h-[400px] bg-purple-500 absolute bottom-0 right-1/4 opacity-[0.04]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Specialization"
          title="Where I go deep"
          subtitle="Two disciplines that reinforce each other — AI reasoning that doesn't skip the engineering fundamentals."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <SpecCard
            data={specializations.ai}
            icon={Brain}
            gradient="from-purple-500/10 to-transparent"
            borderColor="#a855f7"
            index={0}
          />
          <SpecCard
            data={specializations.fullstack}
            icon={Layers}
            gradient="from-cyan-500/10 to-transparent"
            borderColor="#22d3ee"
            index={1}
          />
        </div>

        {/* Connecting statement */}
        <AnimatedSection className="mt-12 text-center" delay={0.4}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass border border-white/[0.06]">
            <span className="text-sm text-white/50">
              These aren't separate — every AI feature I ship runs on a clean full-stack foundation.
            </span>
          </div>
        </AnimatedSection>

        {/* Architecture callout */}
        <AnimatedSection className="mt-8" delay={0.5}>
          <div className="rounded-2xl border border-white/[0.06] bg-[#0d0e10] p-6 font-mono text-xs">
            <p className="text-white/30 mb-3">// ClawtTrade architecture — AI reasoning with hard boundaries</p>
            <div className="space-y-1">
              <p>
                <span className="text-cyan-400">LLM</span>
                <span className="text-white/30"> → rank signals, explain incidents, suggest intents</span>
              </p>
              <p>
                <span className="text-blue-400">RiskEngine</span>
                <span className="text-white/30"> → non-bypassable, deterministic, always in the loop</span>
              </p>
              <p>
                <span className="text-purple-400">ExecutionRouter</span>
                <span className="text-white/30"> → idempotent, audited, fails safe when AI is unavailable</span>
              </p>
              <p>
                <span className="text-green-400">Postgres</span>
                <span className="text-white/30"> → source of truth for every decision and order lifecycle</span>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
