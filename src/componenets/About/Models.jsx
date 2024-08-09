import * as THREE from 'three'
import { a, useSprings } from '@react-spring/three'
import {
  PerspectiveCamera,
  ScreenQuad,
  useFBO,
  useGLTF,
} from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import { CrossFadeMaterial } from './XFadeMaterial'
import { MeshBasicMaterial } from 'three/src/Three.js'

const transitions = {
  from: { rotation: [0, -Math.PI / 10, 0], scale: [0.8, 0.8, 0.8] },
  enter: { rotation: [0, 0, 0], scale: [1, 1, 1] },
  leave: { rotation: [0, Math.PI / 10, 0], scale: [0.8, 0.8, 0.8] },
}

const enter = transitions.enter
const leave = transitions.leave

function Model({ model, ...props }) {
  const ref = useRef()
  const [rEuler, rQuaternion] = useMemo(
    () => [new THREE.Euler(), new THREE.Quaternion()],
    []
  )
  useFrame((state) => {
    rEuler.set(0, (state.mouse.x * Math.PI) / 150, (-state.mouse.y * Math.PI) / 150)
    ref.current.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.1)
  })
  return (
    <group ref={ref}>
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.7} position={[8, 6, -4]} penumbra={0} />
      <a.primitive {...props} object={model.scene} />
    </group>
  )
}

const Models = ({ shownIndex, models }) => {
  const _models = useGLTF(models)
  const [idxesInScenes] = useState([shownIndex, (shownIndex + 1) % models.length])
  const hiddenTxt = useRef(1)
  const shownTxt = useMemo(() => {
    if (idxesInScenes.indexOf(shownIndex) < 0)
      idxesInScenes[hiddenTxt.current] = shownIndex
    const idx = idxesInScenes.indexOf(shownIndex)
    hiddenTxt.current = idx ? 0 : 1
    return idx
  }, [shownIndex, idxesInScenes])

  const t0 = useFBO({ stencilBuffer: false, multisample: true })
  const t1 = useFBO({ stencilBuffer: false, multisample: true })
  const targets = [t0, t1]
  const camRef = useRef(null)

  // render models
  useFrame((state) => {
    state.gl.setRenderTarget(targets[0])
    state.gl.render(_models[idxesInScenes[0]].scene, camRef.current)
    state.gl.setRenderTarget(targets[1])
    state.gl.render(_models[idxesInScenes[1]].scene, camRef.current)
    state.gl.setRenderTarget(null)
    state.gl.render(state.scene, state.camera)
  }, 1)

  const [springs, api] = useSprings(2, (i) => transitions[i === 0 ? 'enter' : 'from'])
  const regress = useThree((state) => state.performance.regress)

  useEffect(() => {
    api.start((i) => {
      const isEntering = i === shownTxt
      const t = isEntering ? enter : leave
      return { ...t, onChange: () => regress() }
    })
  }, [api, shownTxt, regress])

  useEffect(() => {
    console.log(idxesInScenes)
  }, [idxesInScenes])

  return (
    <>
      <PerspectiveCamera
        ref={camRef}
        position={[-2.71, 1.34, 1.8]}
        rotation={[-0.74, -1.14, -0.7]}
        far={9}
        fov={37.1}
      />
      <ScreenQuad>
        <CrossFadeMaterial
          attach='material'
          texture1={t0.texture}
          texture2={t1.texture}
          shownTxt={shownTxt}
        />
      </ScreenQuad>
      {springs.map((props, i) => (
        <Model key={i} model={_models[idxesInScenes[i]]} {...props} />
      ))}
    </>
  )
}

export default Models
