import { useEffect, useRef } from 'react'
import { Section } from './Utils'

const cards = [
  {
    url: '/images/img2.jpg',
    title: 'Project number 1',
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

export const ProjectsSection = () => {
  const projectRefs = useRef([])
  const myDivRef = useRef()

  // useEffect(() => {
  //   projectRefs.current.forEach((ref, index) => {
  //     new hoverEffect({
  //       parent: ref,
  //       image1: '/images/img2.jpg',
  //       image2: '/images/img3.jpg',
  //       displacementImage: '/images/img4.jpg',
  //     })
  //   })

  //   return () => {
  //     // Cleanup function to remove hover effects
  //     projectRefs.current.forEach((ref) => {
  //       ref.hoverEffect.remove()
  //     })
  //   }
  // }, [])

  return (
    <Section>
      <div className='projects-container'>
        <h2>Featured Projects</h2>
        <div className='projects-contents'>
          {cards.map((card, index) => (
            <div key={card.id} className='project'>
              <div className='project-name-wrapper'>
                <h1 className={`project-name-${card.id}`}>{card.title}</h1>
              </div>
              {/* <a href={`/projects&${card.id}`}>
                <div className='project-name-wrapper'>
                  <h1 className={`project-name-${card.id}`}>{card.title}</h1>
                </div>
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
