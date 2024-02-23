import { ProjectsSection } from "./Projects"
import { SketchesSection } from "./Sketches"
import { Section } from "./Utils"

export const Interface = () => {
  return (
    <div className='interface-container'>
      <Section>
        <h2>MAIN</h2>
      </Section>
      <ProjectsSection />
      <SketchesSection />
      <Section>
        <h2>Contact</h2>
      </Section>
    </div>
  )
}
