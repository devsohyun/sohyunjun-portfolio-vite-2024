import * as THREE from "three"
import { Canvas, useLoader } from "@react-three/fiber"
import { Scroll, ScrollControls } from "@react-three/drei"
import "./styles/main.scss"
import { Experience } from "./componenets/experience/Experience"
import { Interface } from "./componenets/interface/Sections"

const App = () => {
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
      <ScrollControls pages={4} damping={0.1}>
        <Experience />
        <Scroll html>
          <Interface />
        </Scroll>
      </ScrollControls>
    </Canvas>
  )
}

export default App
