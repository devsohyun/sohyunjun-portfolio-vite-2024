import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei"

const Flower = (props) => {
  const { nodes } = useGLTF("/models/torus-through-planes.glb")
  return (
    <group {...props} dispose={null}>
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
          color={"#d3d3d3"}
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
    </group>
  )
}

export default Flower
