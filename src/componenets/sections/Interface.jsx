import { Curtains } from "react-curtains"
import { IntroSection } from "./Intro"
import { ProjectsSection } from "./Projects"
import { SketchesSection } from "./Sketches"
import { Section } from "./Utils"

export const Interface = () => {
  return (
    <Curtains>
      <div className='interface-container'>
        <IntroSection />
        <ProjectsSection />
        <SketchesSection />
        <Section>
          <h2>Contact</h2>
        </Section>
      </div>
    </Curtains>
  )
}
