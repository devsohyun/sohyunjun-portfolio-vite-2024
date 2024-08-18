import { useEffect, useRef, useState } from 'react'
import Models from './Models'
import Texts from './Texts'

const objects = ['Stool', 'Table', 'Bench']
const models = objects.map((k) => `${import.meta.env.BASE_URL}/models/about/` + k.toLowerCase() + '.glb')

const About = () => {
  const ref = useRef()
  const [idx, setIdx] = useState(1)
  const aboutTexts = ['Hello, I like', 'Stool', 'Table', 'and', 'Bench']
  const modelIdx = objects.indexOf(aboutTexts[idx])

  // useEffect(() => {
  //   console.log(modelIdx)
  // }, [modelIdx])
  return (
    <>
      <Models shownIndex={modelIdx} models={models} target={ref} />
      <Texts idx={idx} setIdx={setIdx} aboutTexts={aboutTexts} />
    </>
  )
}

export default About
