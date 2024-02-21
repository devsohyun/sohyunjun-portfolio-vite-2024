import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, forwardRef } from "react"
import { ProjectsSection } from "./Projects"
import { SketchesSection } from "./Sketches"
import { Section } from "./Utils"

export const Interface = () => {
  return (
    <div className='interface-container'>
      <Section>
        <h1>Main</h1>
      </Section>
      <ProjectsSection />
      <SketchesSection />
      <Section>
        <h1>Contact</h1>
      </Section>
    </div>
  )
}
