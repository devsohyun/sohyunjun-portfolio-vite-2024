import { useEffect } from 'react'
import FadingImageDisplacement from './FadingImageDisplacement'
import { useThree } from '@react-three/fiber'

const cards = [
  {
    url: '/images/home/img1.jpg',
    name: 'Lorem ipsum',
    id: 1,
  },
  {
    url: '/images/home/img2.jpg',
    name: 'Lorem ipsum',
    id: 2,
  },
  {
    url: '/images/home/img3.jpg',
    name: 'Lorem ipsum',
    id: 3,
  },
  {
    url: '/images/home/img4.jpg',
    name: 'Lorem ipsum',
    id: 4,
  },
]

const ProjectsScroll = () => {
	const state = useThree()
	const { width, height } = state.viewport.getCurrentViewport(state.camera, [0, 0, 12])
  return (
    <>
      {cards.map((card, index) => (
        <FadingImageDisplacement
          key={card.id}
					index={index}
          position={[index % 2 === 0 ? -width / 2.5 : width / 2.5, -1.2 * index, 8]}
          url={card.url}
					name={card.name}
        />
      ))}
    </>
  )
}

export default ProjectsScroll
