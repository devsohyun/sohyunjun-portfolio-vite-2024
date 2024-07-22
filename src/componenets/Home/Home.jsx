import { Scroll } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { useState, useEffect, useRef } from 'react'
import { ScrollControls } from '@react-three/drei'
import { Experience } from './Experience'
import { ScrollManager } from './ScrollManager'
import { Interface } from './sections/Interface'

const Home = () => {
  const [section, setSection] = useState(0)

  return (
    <>
      <ScrollControls pages={3} damping={0.1}>
        {/* change size of entire page */}
        <ScrollManager section={section} onSectionChange={setSection} />
        <Experience section={section} setSection={setSection} />
        <Scroll html>
          <Interface />
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default Home
