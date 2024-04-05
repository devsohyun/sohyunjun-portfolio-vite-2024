import { motion } from 'framer-motion'
import { Section } from './Utils'
import { Curtains, Plane } from 'react-curtains'

export const ProjectsSection = () => {
  const cards = [
    {
      url: '/images/img2.jpg',
      title: 'Title 1',
      id: 1,
    },
    {
      url: '/images/img2.jpg',
      title: 'Title 2',
      id: 2,
    },
    {
      url: '/images/img2.jpg',
      title: 'Title 3',
      id: 3,
    },
    {
      url: '/images/img2.jpg',
      title: 'Title 4',
      id: 4,
    },
  ]

  return (
    // check this to see why curtains cannot be at App level??! https://github.com/martinlaxenaire/react-curtains/issues/9
    <Curtains>
      <Section>
        <div className='projects-container'>
          <h2>Featured Projects</h2>
          <div className='projects-contents'>
            {/* <Plane
            >
              <img src='/images/img2.jpg' data-sampler='uPlaneTexture' alt='' />
            </Plane> */}
            {cards.map((card) => (
              <div key={card.id} className='project'>
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
    </Curtains>
  )
}
