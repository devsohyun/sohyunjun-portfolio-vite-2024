import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, forwardRef } from "react"
import { Section } from "./Utils"

export const ProjectsSection = () => {
  return (
    <Section>
      <h2>Featured Projects</h2>
      <div className='projects-contents'>
        <div className='project'>
          <motion.a
            href='/project1'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ borderRadius: "10px" }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src='/images/img2.jpg'
              alt='Project 1'
              whileHover={{ borderRadius: "30px" }}
            />
          </motion.a>
          <motion.h1
            className='project-name'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            TITLE
          </motion.h1>
        </div>
        <div className='project'>
          <motion.a
            href='/project1'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src='/images/img2.jpg'
              alt='Project 1'
              whileHover={{ borderRadius: "30px" }}
            />
          </motion.a>
          <motion.h1
            className='project-name'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            TITLE
          </motion.h1>
        </div>
        <div className='project'>
          <motion.a
            href='/project1'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src='/images/img2.jpg'
              alt='Project 1'
              whileHover={{ borderRadius: "30px" }}
            />
          </motion.a>
          <motion.h1
            className='project-name'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            TITLE
          </motion.h1>
        </div>
        <div className='project'>
          <motion.a
            href='/project1'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src='/images/img2.jpg'
              alt='Project 1'
              whileHover={{ borderRadius: "30px" }}
            />
          </motion.a>
          <motion.h1
            className='project-name'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            TITLE
          </motion.h1>
        </div>
      </div>
    </Section>
  )
}
