import { Html, ScrollControls } from '@react-three/drei'

const Projects = () => {
  return (
    <>
      <ScrollControls pages={3} damping={0.1}>
        <Html>
          <span>Projects</span>
        </Html>
        <mesh></mesh>
      </ScrollControls>
    </>
  )
}

export default Projects
