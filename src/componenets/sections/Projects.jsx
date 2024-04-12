import { Section } from './Utils'

const cards = [
  {
    url: '/images/img2.jpg',
    title: 'Project number 1',
    id: 1,
  },
  {
    url: '/images/img2.jpg',
    title: 'Title 2',
    id: 2,
  },
  {
    url: '/images/img2.jpg',
    title: 'Title 3',
    id: 3,
  },
  {
    url: '/images/img2.jpg',
    title: 'Title 4',
    id: 4,
  },
]

export const ProjectsSection = () => {

  return (
    <Section>
      <div className='projects-container'>
        <h2>Featured Projects</h2>
        <div className='projects-contents'>
          {cards.map((card) => (
            <div key={card.id} className='project'>
              <a href={`/projects&${card.id}`}>
                <img src={card.url} alt={`Project ${card.id}`} />
              </a>
              <div className='project-name-wrapper'>
                <h1 className={`project-name-${card.id}`}>{card.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
