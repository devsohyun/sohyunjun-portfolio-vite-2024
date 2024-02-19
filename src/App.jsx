import * as THREE from "three"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, Lightformer, OrbitControls } from "@react-three/drei"
import {
  EffectComposer,
  Bloom,
  LUT,
  BrightnessContrast,
  HueSaturation,
  ToneMapping,
} from "@react-three/postprocessing"
import { LUTCubeLoader, ToneMappingMode } from "postprocessing"
import Model from "./componenets/home/Model"
import "./styles/main.scss"

const App = () => {
  const texture = useLoader(LUTCubeLoader, "/models/F-6800-STD.cube")
  return (
    <Canvas
      gl={{ antialias: false }}
      camera={{ position: [15, -8, 15], fov: 15 }}
      onCreated={(state) => {
        state.gl.toneMapping = THREE.NoToneMapping
      }}
    >
      <color attach='background' args={["#2c2c2c"]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Model position={[0, 0, 0]} />
      <OrbitControls />
      <Environment files='./images/peppermint_powerplant_1k.hdr' resolution={512}>
        <group rotation={[0, 0, 1]}>
          <Lightformer
            form='circle'
            intensity={5}
            position={[0, 5, -10]}
            scale={20}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
          />
          <Lightformer
            intensity={0.1}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
            position={[-5, 20, -1]}
            rotation-y={Math.PI / 2}
            scale={[50, 10, 1]}
          />
          <Lightformer
            intensity={0.1}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
            position={[10, 1, 0]}
            rotation-y={-Math.PI / 2}
            scale={[50, 10, 1]}
          />
          <Lightformer
            color='white'
            intensity={0.2}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
            position={[0, 1, 0]}
            scale={[10, 100, 1]}
          />
          <Lightformer
            intensity={10}
            position={[-20, -8, 15]}
            scale={10}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
          />
        </group>
      </Environment>
      <EffectComposer disableNormalPass>
        <Bloom mipmapBlur luminanceThreshold={0.5} intensity={1} />
        <LUT lut={texture} />
        <BrightnessContrast brightness={0} contrast={0.1} />
        <HueSaturation hue={0} saturation={-0.25} />
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer>
    </Canvas>
  )
}

export default App
