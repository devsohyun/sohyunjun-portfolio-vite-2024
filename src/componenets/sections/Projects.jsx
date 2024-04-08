import { motion } from 'framer-motion'
import { Section } from './Utils'
import { Curtains, Plane, useCurtains, useCurtainsEvent } from 'react-curtains'
import { Vec2 } from 'curtainsjs'
import { vertexShader, fragmentShader } from '../../shaders/shaders'
import { useRef, useState } from 'react'
import SinglePlane from './SinglePlane'

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

  const [nbPlanes, setNbPlanes] = useState(4)

  // keep track of the planes
  const [planes, setPlanes] = useState([])

  const planesDeformations = useRef(0)

  useCurtainsEvent(
    'onRender',
    (curtains) => {
      // update our planes deformation
      // increase/decrease the effect
      planesDeformations.current = curtains.lerp(planesDeformations.current, 0, 0.075)

      // update planes deformations
      planes.forEach((plane) => {
        plane.uniforms.planeDeformation.value = planesDeformations.current
      })
    },
    [planes]
  )

  useCurtainsEvent('onScroll', (curtains) => {
    // get scroll deltas to apply the effect on scroll
    const delta = curtains.getScrollDeltas()

    // invert value for the effect
    delta.y = -delta.y

    // threshold
    if (delta.y > 60) {
      delta.y = 60
    } else if (delta.y < -60) {
      delta.y = -60
    }

    if (Math.abs(delta.y) > Math.abs(planesDeformations.current)) {
      planesDeformations.current = curtains.lerp(planesDeformations.current, delta.y, 0.5)
    }
  })

  const onPlaneReady = (plane) => {
    setPlanes((planes) => [...planes, plane])
  }

  const buildPlane = (index) => {
    return <SinglePlane key={index} index={index} onPlaneReady={onPlaneReady} />
  }

  const allPlanes = []
  for (let i = 0; i < nbPlanes; i++) {
    allPlanes.push(buildPlane(i))
  }

  return (
    <Section>
      <div className='projects-container'>
        <h2>Featured Projects</h2>
        <div className='MultiplePlanes-wrapper'>
          {allPlanes.map((planeEl) => {
            return planeEl
          })}
        </div>
        {/* <div className='projects-contents'>
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
        </div> */}
      </div>
    </Section>
  )
}
