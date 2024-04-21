import * as THREE from 'three'
import { shaderMaterial, useTexture, Text } from '@react-three/drei'
import { extend, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'

export const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
    tex: undefined,
    tex2: undefined,
    disp: undefined,
  },
  /*glsl*/ ` 
		varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
  /*glsl*/ ` 
		varying vec2 vUv;
    uniform sampler2D tex;
    uniform sampler2D tex2;
    uniform sampler2D disp;
    uniform float _rot;
    uniform float dispFactor;
    uniform float effectFactor;
    void main() {
      vec2 uv = vUv;
      vec4 disp = texture2D(disp, uv);
      vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
      vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
      vec4 _texture = texture2D(tex, distortedPosition);
      vec4 _texture2 = texture2D(tex2, distortedPosition2);
      vec4 finalTexture = mix(_texture, _texture2, dispFactor);
      gl_FragColor = finalTexture;
      #include <tonemapping_fragment>
      #include <encodings_fragment>
    } `
)

extend({ ImageFadeMaterial })

const FadingImageDisplacement = (props) => {
  const { index, position, default_url, hover_url, name } = props
  const imageRef = useRef()
  const [hovered, setHover] = useState(false)
  const state = useThree()
  const { width, height } = state.viewport.getCurrentViewport(state.camera, [0, 0, 12])
  const [texture1, texture2, dispTexture] = useTexture([
    default_url, 
    hover_url, 
    '/images/home/displacement/11.jpg',
  ])
  const fontProps = {
    font: '/fonts/Gantari-Regular.woff',
    fontSize: 0.15,
    letterSpacing: 0.02,
    lineHeight: 0.5,
    color: '#fff',
    position: [index % 2 === 0 ? width / 2.5 : -width / 2.5, -0.35, 0],
    'material-toneMapped': false,
  }

  useFrame(() => {
    imageRef.current.dispFactor = THREE.MathUtils.lerp(
      imageRef.current.dispFactor,
      hovered ? 1 : 0,
      0.075
    )
  })

  return (
    <mesh
      position={position}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <planeGeometry />
      <imageFadeMaterial
        ref={imageRef}
        tex={texture1}
        tex2={texture2}
        disp={dispTexture}
        toneMapped={false}
      />
      <Text {...fontProps}>{name}</Text>
    </mesh>
  )
}

export default FadingImageDisplacement
