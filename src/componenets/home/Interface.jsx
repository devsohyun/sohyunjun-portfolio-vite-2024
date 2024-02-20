export const Section = (props) => {
  const { children } = props

  return <section className='home-panel'>{children}</section>
}

export const Interface = () => {
  return (
    <>
      <Section>
        <h1>Main</h1>
      </Section>
      <Section>
        <h1>Projects</h1>
      </Section>
      <Section>
        <h1>Sketches</h1>
      </Section>
      <Section>
        <h1>Contact</h1>
      </Section>
    </>
  )
}
