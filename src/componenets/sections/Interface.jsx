import { Curtains } from 'react-curtains'
import { IntroSection } from './Intro'
import { ProjectsSection } from './Projects'
import { SketchesSection } from './Sketches'
import { Section } from './Utils'

export const Interface = () => {
  return (
    <Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)}>
      <div className='interface-container'>
        <ProjectsSection />
        <IntroSection />
        <SketchesSection />
        <Section>
          <h2>Contact</h2>
        </Section>
      </div>
    </Curtains>
  )
}
