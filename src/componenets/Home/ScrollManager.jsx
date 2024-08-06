import { useEffect, useRef } from "react"
import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import gsap from "gsap"

export const ScrollManager = (props) => {
  const { section, onSectionChange } = props

  const data = useScroll()
  const lastScroll = useRef(0)
  const isAnimating = useRef(false)

  // align scroll between section 0 and 1
  data.fill.style.top = "0"
  data.fill.style.position = "absolute"

  useEffect(() => {
    // trigger animations
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true
      },
      onComplete: () => {
        isAnimating.current = false
      },
    })
  }, [section])

  useFrame(() => {
    console.log(data.pages)
    
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current
      return
    }

		// scroll with fixed positions between 0 and 1 
    const curSection = Math.floor(data.scroll.current * data.pages)
    if (data.scroll.current > lastScroll.current && curSection === 0) {
      onSectionChange(1)
    }
    if (
      data.scroll.current < lastScroll.current &&
      data.scroll.current < 1 / (data.pages - 1)
    ) {
      onSectionChange(0)
    }
    lastScroll.current = data.scroll.current
  })

  return null
}
