import * as THREE from 'three'
import { Scroll } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import { Menu } from './componenets/common/Menu'
import { Experience } from './componenets/experience/Experience'
import { ScrollControls } from '@react-three/drei'
import { ScrollManager } from './componenets/experience/ScrollManager'
import { Interface } from './componenets/sections/Interface'
import './styles/main.scss'

const App = () => {
  const [section, setSection] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <>
      <Canvas
        gl={{ antialias: false }}
        camera={{ position: [15, -8, 15], fov: 15 }}
        onCreated={(state) => {
          state.gl.toneMapping = THREE.NoToneMapping
        }}
      >
        <Suspense fallback={null}>
          <ScrollControls pages={6.5} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Experience section={section} setSection={setSection} />
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
    </>
  )
}

export default App
