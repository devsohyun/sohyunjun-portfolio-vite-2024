const Section = (props) => {
  const { children } = props

  return <section className='interface-panel'>{children}</section>
}

export const Interface = () => {
  return (
    <div className='interface-container'>
      <Section>
        <h1>Main</h1>
      </Section>
      <ProjectsSection />
      <Section>
        <h1>Sketches</h1>
      </Section>
      <Section>
        <h1>Contact</h1>
      </Section>
    </div>
  )
}

const ProjectsSection = () => {
  return (
    <Section>
      <h1>Featured Projects</h1>
      <div className='projects-container'>
        <a href='/project1'>
          <img src='/images/img2.jpg' alt='Project 1' />
        </a>
        <a href='/project2'>
          <img src='/images/img2.jpg' alt='Project 2' />
        </a>
        <a href='/project3'>
          <img src='/images/img2.jpg' alt='Project 3' />
        </a>
        <a href='/project4'>
          <img src='/images/img2.jpg' alt='Project 4' />
        </a>
      </div>
    </Section>
  )
}
