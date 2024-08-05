import { Suspense, useEffect, useState, lazy } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Menu } from './common/Menu'
import { MotionConfig } from 'framer-motion'
import Loader from './UI/Loader'
import Projects from './Projects/Projects'
import Sketches from './Sketches/Sketches'
import About from './About/About'

const Home = lazy(() => import('./Home/Home'))

const Webgl = ({ page }) => {
  const [section, setSection] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   if (canvasRef.current) {
  //     const curtainsTemp = new Curtains({
  //       canvas: canvasRef.current,
  //       container: 'canvas',
  //     })
  //     setCurtains(curtainsTemp)
  //   }
  // }, [canvasRef.current])

  const HandleLoading = ({ load }) => {
    useEffect(() => {
      load(true)
      return () => load(false)
    }, [])
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
        <Loader load={isLoading} page={page} />
      </MotionConfig>
    </>
  )
}

export default Webgl
