import { Scroll, ScrollControls } from '@react-three/drei'
import { useEffect, useState } from 'react'
import FadingImageDisplacement from '../Home/FadingImageDisplacement'
import { useThree } from '@react-three/fiber'


const cards = [
  {
    default_url: `${import.meta.env.BASE_URL}/images/home/project_default_01.jpg`,
    hover_url: `${import.meta.env.BASE_URL}/images/home/project_hover_01.jpg`,
    name: 'Lorem ipsum',
    id: 1,
  },
  {
    default_url: `${import.meta.env.BASE_URL}/images/home/project_default_02.jpg`,
    hover_url: `${import.meta.env.BASE_URL}/images/home/project_hover_02.jpg`,
    name: 'Lorem ipsum',
    id: 2,
  },
  {
    default_url: `${import.meta.env.BASE_URL}/images/home/project_default_03.jpg`,
    hover_url: `${import.meta.env.BASE_URL}/images/home/project_hover_03.jpg`,
    name: 'Lorem ipsum',
    id: 3,
  },
  {
    default_url: `${import.meta.env.BASE_URL}/images/home/project_default_04.jpg`,
    hover_url: `${import.meta.env.BASE_URL}/images/home/project_hover_04.jpg`,
    name: 'Lorem ipsum',
    id: 4,
  },
]

const Projects = () => {
  const [section, setSection] = useState(0)
  const state = useThree()
  const { width, height } = state.viewport.getCurrentViewport(state.camera, [0, 0, 12])

  useEffect(() => {
    console.log(section)
    
  }, [])

  return (
    <>
      <ScrollControls pages={2} damping={0.1}>
        <Scroll>
          {cards.map((card, index) => (
            <FadingImageDisplacement
              key={card.id}
              index={index}
              position={[index % 2 === 0 ? -width / 3.5 : width / 3.5, -1.2 * index, 8]}
              default_url={card.default_url}
              hover_url={card.hover_url}
              name={card.name}
              planeWidth={1.6}
              planeHeight={0.9}
            />
          ))}
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default Projects
