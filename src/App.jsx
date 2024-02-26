import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei"
import "./styles/main.scss"
import { Experience } from "./componenets/Experience"
import { Interface } from "./componenets/sections/Interface"
import { useEffect, useState } from "react"
import { ScrollManager } from "./componenets/ScrollManager"
import { Nav } from "./componenets/Nav"

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
        <color attach='background' args={["#2c2c2c"]} />
        {/* <OrbitControls /> */}
        <ScrollControls pages={6.5} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Experience menuOpened={menuOpened} />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Nav
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
    </>
  )
}

export default App
