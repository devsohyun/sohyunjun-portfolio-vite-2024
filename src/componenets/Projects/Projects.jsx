import { useState } from 'react'
import { Menu } from '../common/Menu'
import { ScrollControls } from '@react-three/drei'

const Projects = () => {
  return (
    <>
      <ScrollControls pages={3} damping={0.1}>
				<mesh></mesh>
			</ScrollControls>
    </>
  )
}

export default Projects
