import { useThree } from '@react-three/fiber'
import AbstractDonut from './AbstractDonut'
import { useMotionValue } from 'framer-motion'
import { motion } from 'framer-motion-3d'
import { Scroll } from '@react-three/drei'
import FadingImageDisplacement from './FadingImageDisplacement'
import { useEffect } from 'react'

export const Experience = (props) => {
  const { viewport } = useThree()
  const { section, setSection } = props

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
          animate={{
            z: section === 1 ? 0 : -10,
            y: section === 1 ? -viewport.height : -1.5,
          }}
        >
          <FadingImageDisplacement position-y={0} position-z={8} />
          <FadingImageDisplacement position-y={-1.5} position-z={8} />
          <FadingImageDisplacement position-y={-3} position-z={8} />
          <FadingImageDisplacement position-y={-4.5} position-z={8} />
        </motion.group>
      </Scroll>

      {/* <Projects section={section} /> */}
    </>
  )
}
