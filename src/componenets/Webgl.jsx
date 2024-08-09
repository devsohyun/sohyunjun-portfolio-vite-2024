import { Suspense, useEffect, useState, lazy } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Menu } from './common/Menu'
import { MotionConfig } from 'framer-motion'
import Loader from './UI/Loader'

const Home = lazy(() => import('./Home/Home'))
const Projects = lazy(() => import('./Projects/Projects'))
const Sketches = lazy(() => import('./Sketches/Sketches'))
const About = lazy(() => import('./About/About'))

const Webgl = ({ page }) => {
  const [section, setSection] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const HandleLoading = ({ load }) => {
    useEffect(() => {
      load(true)
      return () => load(false)
    }, [load])
  }

  return (
    <>
      <MotionConfig
        transition={{
          type: 'spring',
          mass: 5,
          stiffness: 500,
          damping: 50,
          restDelta: 0.0001,
        }}
      >
        <Canvas
          gl={{ antialias: false }}
          camera={{ position: [0, 0, 15], fov: 15 }}
          onCreated={(state) => {
            state.gl.toneMapping = THREE.NoToneMapping
          }}
        >
          <Suspense fallback={<HandleLoading load={setIsLoading} />}>
            {page == 'home' && <Home />}
            {page == 'projects' && <Projects />}
            {page == 'sketches' && <Sketches />}
            {page == 'about' && <About />}
          </Suspense>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        <Loader load={isLoading} />
      </MotionConfig>
    </>
  )
}

export default Webgl
