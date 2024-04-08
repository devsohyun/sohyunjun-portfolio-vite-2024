import React from 'react'
import { Plane } from 'react-curtains'
import { vertexShader, fragmentShader } from '../../shaders/shaders'

function SinglePlane({ index = 1, onPlaneReady = () => {} }) {
  const uniforms = {
    planeDeformation: {
      name: 'uPlaneDeformation',
      type: '1f',
      value: 0,
    },
  }

  const drawCheckMargins = {
    top: 100,
    right: 0,
    bottom: 100,
    left: 0,
  }

  const imageIndex = (index % 4) + 1

  return (
    <div className='MultiplePlanes-element'>
      <div className='MultiplePlanes-title'>{'Title ' + (index + 1)}</div>
      <div className='MultiplePlanes-element-inner'>
        <div className='MultiplePlanes-landscape'>
          <div className='MultiplePlanes-landscape-inner'>
            <Plane
              className='MultiplePlanes-plane'
              // plane init parameters
              vertexShader={vertexShader}
              fragmentShader={fragmentShader}
              // shareProgram={true}
              widthSegments={10}
              heightSegments={10}
              drawCheckMargins={drawCheckMargins}
              uniforms={uniforms}
              // plane events
              onReady={onPlaneReady}
            >
              <img
                src='/images/img2.jpg'
                data-sampler='planeTexture'
                alt=''
              />
            </Plane>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePlane
