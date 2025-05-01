"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface CountUpProps {
  start?: number
  end: number
  duration?: number
  delay?: number
  decimals?: number
  prefix?: string
  suffix?: string
}

export default function CountUp({
  start = 0,
  end,
  duration = 2,
  delay = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
}: CountUpProps) {
  const [count, setCount] = useState(start)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)

      let startTimestamp: number | null = null
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
        const currentCount = progress * (end - start) + start

        setCount(currentCount)

        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }

      const timeout = setTimeout(() => {
        window.requestAnimationFrame(step)
      }, delay * 1000)

      return () => clearTimeout(timeout)
    }
  }, [start, end, duration, delay, isInView, hasAnimated])

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}
