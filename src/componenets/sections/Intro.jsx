import { motion } from "framer-motion"
import { Section } from "./Utils"

export const IntroSection = () => {
  return (
    <Section>
      <div className='intro-container'>
        <motion.h1>Lorem Ipsum</motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Lorem Ipsum is simply dummy text of the
          <br />
          printing and typesetting industry.
        </motion.p>
      </div>
    </Section>
  )
}
