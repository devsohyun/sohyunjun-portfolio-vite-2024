import { motion } from "framer-motion"

export const Section = (props) => {
  const { children } = props

  return (
    <motion.section
      className='section'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.section>
  )
}