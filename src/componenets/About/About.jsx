import { useMemo, useState } from 'react'
import Models from './Models'
import Texts from './Texts'
import { Html } from '@react-three/drei'

const objects = ['Stool', 'Table', 'Bench']
const models = objects.map((k) => './models/' + k.toLowerCase() + '.glb')
const demoTexts = [
  'Mònica Losada is a graphic designer from Barcelona living, thinking, trying, talking, sketching and designing in New York. Currently working in Pentagram.',
  'Stool',
  'and',
  'Table',
]

const Item = ({ text, onHover, index, active }) => {
  const modelIdx = useMemo(() => objects.indexOf(text), [text])
  const has3d = modelIdx > -1
  return (
    <span
      className={active ? 'active' : has3d ? '' : 'item'}
      onPointerEnter={() => has3d && onHover(index)}
    >
      {text + ' '}
    </span>
  )
}

const About = () => {
  const [idx, setIdx] = useState(1)
  const modelIdx = objects.indexOf(demoTexts[idx])
  return (
    <>
      {/* <Models shownIndex={modelIdx} models={models} /> */}
      <Html
        className='about-container'
        zIndexRange={[10, 0]}
        fullscreen
        occlude
      >
        <div className='left'>
          <div className='main-img'>
            <img src='/images/about/main.gif' />
          </div>
        </div>
        <div className='right'>
          <div className='header'>
            {demoTexts.map((o, i) => (
              <Item key={i} text={o} active={i === idx} index={i} onHover={setIdx} />
            ))}
          </div>
          <div className='grid-container'>
            <div className='grid-item'>
              <p className='category'>Exprience</p>
              <p className='item'>
                Creative Developer
                <br />
                Does Interactive
                <br />
                Seoul, South Korea
                <br />
                2021 - On going
              </p>
              <p className='item'>
                Creative Developer
                <br />
                Does Interactive
                <br />
                Seoul, South Korea
                <br />
                2021 - On going
              </p>
              <p className='item'>
                Creative Developer
                <br />
                Does Interactive
                <br />
                Seoul, South Korea
                <br />
                2021 - On going
              </p>
            </div>
            <div className='grid-item'>
              <p className='category'>Education</p>
              <p className='item'>
                Industrial Design
                <br />
                Konkuk University
                <br />
                Seoul, South Korea
                <br />
                2015-2020
              </p>
              <p className='item'>
                Industrial Design
                <br />
                Konkuk University
                <br />
                Seoul, South Korea
                <br />
                2015-2020
              </p>
              <p className='item'>
                Industrial Design
                <br />
                Konkuk University
                <br />
                Seoul, South Korea
                <br />
                2015-2020
              </p>
            </div>
          </div>
        </div>
      </Html>
    </>
  )
}

export default About
