import FadingImageDisplacement from './FadingImageDisplacement'
import { useThree } from '@react-three/fiber'

const cards = [
  {
    default_url: '/images/home/project_default_01.jpg',
    hover_url: '/images/home/project_hover_01.jpg',
    name: 'Lorem ipsum',
    id: 1,
  },
  {
    default_url: '/images/home/project_default_02.jpg',
    hover_url: '/images/home/project_hover_02.jpg',
    name: 'Lorem ipsum',
    id: 2,
  },
  {
    default_url: '/images/home/project_default_03.jpg',
    hover_url: '/images/home/project_hover_03.jpg',
    name: 'Lorem ipsum',
    id: 3,
  },
  {
    default_url: '/images/home/project_default_04.jpg',
    hover_url: '/images/home/project_hover_04.jpg',
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
          default_url={card.default_url}
          hover_url={card.hover_url}
					name={card.name}
        />
      ))}
    </>
  )
}

export default ProjectsScroll
