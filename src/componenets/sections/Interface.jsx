import { IntroSection } from './Intro'
import { ProjectsSection } from './Projects'
import { Section } from './Utils'

export const Interface = (props) => {
  return (
    <div className='interface-container'>
      <IntroSection />
      <ProjectsSection />
      <Section>
        <h2>Contact</h2>
      </Section>
    </div>
  )
}
