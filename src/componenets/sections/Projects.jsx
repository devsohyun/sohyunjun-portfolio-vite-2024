import { motion } from "framer-motion"
import { Section } from "./Utils"

export const ProjectsSection = () => {
  const cards = [
    {
      url: "/images/img2.jpg",
      title: "Title 1",
      id: 1,
    },
    {
      url: "/images/img2.jpg",
      title: "Title 2",
      id: 2,
    },
    {
      url: "/images/img2.jpg",
      title: "Title 3",
      id: 3,
    },
    {
      url: "/images/img2.jpg",
      title: "Title 4",
      id: 4,
    },
  ]

  return (
    <Section>
      <div className='projects-container'>
        <h2>Featured Projects</h2>
        <div className='projects-contents'>
          {cards.map((card) => (
            <div className='project'>
              <motion.a
                href={`/projects&${card.id}`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ borderRadius: "10px" }}
                transition={{ duration: 1 }}
              >
                <motion.img
                  src={card.url}
                  alt={`Project ${card.id}`}
                  whileHover={{ borderRadius: "30px" }}
                />
              </motion.a>
              <motion.h1
                className='project-name'
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {card.title}
              </motion.h1>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
