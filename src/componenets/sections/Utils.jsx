import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, forwardRef } from "react"
import { ProjectsSection } from "./Projects"
import { SketchesSection } from "./Sketches"

export const Section = (props) => {
  const { children } = props

  return (
    <motion.section
      className='section'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  )
}