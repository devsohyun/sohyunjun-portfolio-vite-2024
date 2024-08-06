import { useThree } from '@react-three/fiber'
import { useMotionValue } from 'framer-motion'
import { motion } from 'framer-motion-3d'
import { Scroll } from '@react-three/drei'
import ProjectsScroll from './ProjectsScroll'
import AbstractDonut from '../models/AbstractDonut'

export const Experience = (props) => {
  const { viewport } = useThree()
  const { section } = props

  const cameraPositionX = useMotionValue()
  const cameraLookAtX = useMotionValue()

  return (
    <>
      <color attach='background' args={['#2c2c2c']} />
      {/* <OrbitControls /> */}
      <motion.group position={[0, 0, -10]} rotation={[0.05, 0.5, 0.5]}>
        <AbstractDonut section={section} />
      </motion.group>
      <Scroll>
        <motion.group
          position={[0, -5, 0]}
          animate={{
            z: section === 1 ? 0 : -10,
            y: section === 1 ? -viewport.height : -5,
          }}
        >
          <ProjectsScroll />
        </motion.group>
      </Scroll>
    </>
  )
}
