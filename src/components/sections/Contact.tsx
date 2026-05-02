import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Send, Copy, CheckCheck, MapPin } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { personal, contact } from '@/data/portfolio'

const socials = [
  { icon: Github, href: personal.github, label: 'GitHub', username: '@muhammadasimkk' },
  { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn', username: 'in/muhammadasimkk' },
  { icon: Twitter, href: personal.twitter, label: 'Twitter', username: '@muhammadasimkk' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Opens mail client with prefilled content
    const subject = encodeURIComponent(`Hello from ${formState.name}`)
    const body = encodeURIComponent(`${formState.message}\n\nFrom: ${formState.name} (${formState.email})`)
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
    setTimeout(() => {
      setSending(false)
      setFormState({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb w-[600px] h-[600px] bg-cyan-400 absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Get in touch"
          title={contact.heading}
          subtitle={contact.subheading}
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact info */}
          <div className="space-y-6">
            {/* Availability */}
            <AnimatedSection direction="left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/20 bg-green-400/[0.06] text-green-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {contact.availability}
              </div>
            </AnimatedSection>

            {/* Email card */}
            <AnimatedSection delay={0.1} direction="left">
              <div className="glass rounded-2xl p-6">
                <p className="text-xs text-white/30 font-mono mb-3 tracking-wider uppercase">Best way to reach me</p>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                      <Mail size={17} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{personal.email}</p>
                      <p className="text-xs text-white/40">Usually replies within 24h</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={copyEmail}
                    className="p-2.5 rounded-xl border border-white/[0.08] text-white/40 hover:text-white hover:border-white/20 transition-all"
                    whileTap={{ scale: 0.92 }}
                    title="Copy email"
                  >
                    {copied ? <CheckCheck size={15} className="text-green-400" /> : <Copy size={15} />}
                  </motion.button>
                </div>
              </div>
            </AnimatedSection>

            {/* Location */}
            <AnimatedSection delay={0.15} direction="left">
              <div className="glass rounded-2xl p-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                  <MapPin size={15} className="text-white/40" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{personal.location}</p>
                  <p className="text-xs text-white/40">Open to remote worldwide</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Social links */}
            <AnimatedSection delay={0.2} direction="left">
              <div className="space-y-3">
                {socials.map(({ icon: Icon, href, label, username }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.06] bg-[#0d0e10] hover:border-white/[0.12] hover:bg-white/[0.02] transition-all group"
                  >
                    <Icon size={16} className="text-white/40 group-hover:text-white/70 transition-colors" />
                    <div className="flex-1">
                      <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                        {label}
                      </span>
                      <span className="text-xs text-white/30 ml-2">{username}</span>
                    </div>
                    <Send size={12} className="text-white/20 group-hover:text-white/40 transition-colors" />
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Contact form */}
          <AnimatedSection delay={0.15} direction="right">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 space-y-5">
              <h3 className="text-base font-semibold text-white mb-1">Send a message</h3>
              <p className="text-xs text-white/40 mb-2">Opens your mail client with prefilled content.</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-white/40 font-medium">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06] transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-white/40 font-medium">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-white/40 font-medium">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="What are you working on? What kind of role are you hiring for?"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06] transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:opacity-90 disabled:opacity-60 transition-all"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Send size={15} />
                {sending ? 'Opening mail client...' : 'Send Message'}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
