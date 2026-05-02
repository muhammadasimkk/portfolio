import AnimatedSection from './AnimatedSection'

type Props = {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }: Props) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <AnimatedSection className={`max-w-2xl ${alignment}`}>
      <p className="text-xs font-mono font-medium tracking-widest text-cyan-400/80 uppercase mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">{title}</h2>
      {subtitle && (
        <p className="text-base text-white/50 leading-relaxed">{subtitle}</p>
      )}
    </AnimatedSection>
  )
}
