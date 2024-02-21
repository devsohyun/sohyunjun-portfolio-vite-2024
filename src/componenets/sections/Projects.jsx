import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, forwardRef } from "react"
import { Section } from "./Utils"

export const ProjectsSection = () => {
  return (
    <Section>
      <h1>Featured Projects</h1>
      <div className='projects-contents'>
        <motion.a href='/project1' initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}>
          <motion.img src='/images/img2.jpg' alt='Project 1' initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 1 }} />
        </motion.a>
        <motion.a href='/project2' initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}>
          <motion.img src='/images/img2.jpg' alt='Project 2' initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 1 }} />
        </motion.a>
      </div>
    </Section>
  )
}


