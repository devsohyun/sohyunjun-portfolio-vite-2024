import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { Scroll, ScrollControls } from "@react-three/drei"
import "./styles/main.scss"
import { Experience } from "./componenets/Experience"
import { Interface } from "./componenets/sections/Interface"
import { useEffect, useState } from "react"
import { ScrollManager } from "./componenets/ScrollManager"

const App = () => {
  const [section, setSection] = useState(0)
  const [menuOpened, useMenuOpened] = useState(0)
  // const [sectionChange, setSectionChange] = useState(0)


  return (
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
  )
}

export default App
