import { motion } from "framer-motion"

const Section = (props) => {
  const { children } = props

  return (
    <motion.section
      className='interface-panel'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  )
}

export const Interface = () => {
  return (
    <div className='interface-container'>
      <Section>
        <h1>Main</h1>
      </Section>
      <ProjectsSection />
      <Section>
        <h1>Sketches</h1>
      </Section>
      <Section>
        <h1>Contact</h1>
      </Section>
    </div>
  )
}

const ProjectsSection = () => {
  return (
    <Section>
      <h1>Featured Projects</h1>
      <div className='projects-container'>
        <motion.a href='/project1' initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }}>
          <motion.img src='/images/img2.jpg' alt='Project 1' initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ duration: 1 }} />
        </motion.a>
        <motion.a href='/project2' initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }}>
          <motion.img src='/images/img2.jpg' alt='Project 2' initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ duration: 1 }} />
        </motion.a>
        <motion.a href='/project3' initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }}>
          <motion.img src='/images/img2.jpg' alt='Project 3' initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ duration: 1 }} />
        </motion.a>
        <motion.a href='/project4' initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }}>
          <motion.img src='/images/img2.jpg' alt='Project 4' initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ duration: 1 }} />
        </motion.a>
      </div>
    </Section>
  )
}
