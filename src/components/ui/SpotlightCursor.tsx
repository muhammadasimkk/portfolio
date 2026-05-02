import { useEffect, useRef } from 'react'

export default function SpotlightCursor() {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!spotlightRef.current) return
      spotlightRef.current.style.left = `${e.clientX}px`
      spotlightRef.current.style.top = `${e.clientY}px`
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed z-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03]"
      style={{
        background: 'radial-gradient(circle, rgba(34,211,238,1) 0%, transparent 70%)',
        transition: 'left 0.15s ease, top 0.15s ease',
      }}
    />
  )
}
