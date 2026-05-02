import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Terminal } from 'lucide-react'
import { personal } from '@/data/portfolio'

const techPills = ['TypeScript', 'React', 'Node.js', 'AI Systems', 'Python', 'PostgreSQL', 'Docker', 'React Native']

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })
  const orb1X = useTransform(springX, [-400, 400], [-30, 30])
  const orb1Y = useTransform(springY, [-400, 400], [-20, 20])
  const orb2X = useTransform(springX, [-400, 400], [20, -20])
  const orb2Y = useTransform(springY, [-400, 400], [15, -15])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
      onMouseMove={handleMouseMove}
    >
      {/* Gradient orbs */}
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className="orb w-[600px] h-[600px] bg-cyan-400 absolute -top-32 -left-32"
      />
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="orb w-[500px] h-[500px] bg-purple-500 absolute -bottom-32 -right-32"
      />
      <div className="orb w-[400px] h-[400px] bg-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#08090a] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-2">
              <span className="text-white">Muhammad</span>
              <br />
              <span className="text-white">Bin </span>
              <span className="text-gradient">Asim</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants} className="mt-6 mb-6">
            <div className="flex items-center gap-3">
              <Terminal size={16} className="text-cyan-400 shrink-0" />
              <p className="font-mono text-sm sm:text-base text-white/60">
                {personal.title}
              </p>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/50 leading-relaxed max-w-2xl mb-10"
          >
            {personal.tagline}
          </motion.p>

          {/* Tech pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
            {techPills.map((pill, i) => (
              <motion.span
                key={pill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-white/[0.04] border border-white/[0.08] text-white/50 hover:text-white/80 hover:border-white/[0.15] transition-all cursor-default"
              >
                {pill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-12">
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-all shadow-glow-cyan"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles size={16} />
              View My Work
            </motion.a>
            <motion.a
              href={personal.cvUrl}
              download
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.1] text-white/70 hover:text-white hover:border-white/20 text-sm font-semibold hover:bg-white/[0.04] transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={16} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <span className="text-xs text-white/20 font-mono">find me on</span>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: personal.github, label: 'GitHub' },
                { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg text-white/30 hover:text-white/80 border border-transparent hover:border-white/[0.1] hover:bg-white/[0.04] transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 flex flex-wrap gap-8"
        >
          {[
            { value: '2+', label: 'Years building' },
            { value: '10+', label: 'Projects shipped' },
            { value: '12', label: 'Services in ClawtTrade' },
            { value: '20+', label: 'Technologies' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span className="text-2xl font-black text-gradient-cyan-blue">{value}</span>
              <span className="text-xs text-white/30 mt-0.5">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  )
}
