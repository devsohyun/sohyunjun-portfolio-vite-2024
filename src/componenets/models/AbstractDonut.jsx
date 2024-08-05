import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { Environment, Lightformer } from '@react-three/drei'
import { LUTCubeLoader, ToneMappingMode } from 'postprocessing'
import { motion } from 'framer-motion-3d'
import {
  EffectComposer,
  Bloom,
  LUT,
  BrightnessContrast,
  HueSaturation,
  ToneMapping,
} from '@react-three/postprocessing'

const AbstractDonut = (props) => {
  const groupRef = useRef()
  const { nodes } = useGLTF('/models/torus-through-planes.glb')
  const texture = useLoader(LUTCubeLoader, '/models/F-6800-STD.cube')
  const { section } = props

  // //  rotate mesh with mouse position
  // useFrame(({ pointer }) => {
  //   groupRef.current.rotation.y = THREE.MathUtils.lerp(
  //     groupRef.current.rotation.y,
  //     pointer.x * (Math.PI / -10),
  //     0.05
  //   )

  //   groupRef.current.rotation.x = THREE.MathUtils.lerp(
  //     groupRef.current.rotation.x,
  //     pointer.y * (Math.PI / 10),
  //     0.05
  //   )
  // })'

  useEffect(() => {
    console.log(section)
    
  }, [section])

  return (
    <motion.group ref={groupRef} {...props} dispose={null} animate={{ rotateY: section === 0 ? 0 : 3 }}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        position={[0, -0.007, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.906, 2.541, 1.906]}
      >
        <MeshTransmissionMaterial
          backside
          samples={16}
          resolution={256}
          transmission={1}
          roughness={0.6}
          thickness={0.08}
          backsideThickness={0.05} //1
          ior={1.0}
          chromaticAberration={3}
          anisotropy={1}
          distortion={0}
          distortionScale={0.5}
          temporalDistortion={0}
          attenuationDistance={0.5}
          anisotropicBlur={0.1}
          envMapIntensity={0.3}
          color={'#d3d3d3'}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={nodes.Torus.material}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      >
        {/* <MeshTransmissionMaterial
            samples={6}
            resolution={256}
            thickness={-1}
            anisotropy={0.25}
          /> */}
      </mesh>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
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
        <Bloom mipmapBlur luminanceThreshold={0.5} intensity={0.5} />
        <LUT lut={texture} />
        <BrightnessContrast brightness={0} contrast={0.1} />
        <HueSaturation hue={0} saturation={-0.25} />
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer>
    </motion.group>
  )
}

export default AbstractDonut
