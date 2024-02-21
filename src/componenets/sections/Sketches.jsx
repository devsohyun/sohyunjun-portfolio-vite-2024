import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, forwardRef } from "react"
import { Section } from "./Utils"

export const SketchesSection = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])

  //   useEffect(() => {
  //     console.log(x)
  //   }, [x])

  return (
    <Section>
      <div ref={targetRef}>
        <h1>Sketches</h1>
        <div className='sketches-contents'>
          {cards.map((card) => {
            console.log(cards)
            return <Card card={card} key={card.id} />
          })}
        </div>
      </div>
    </Section>
  )
}

const cards = [
  {
    url: "/images/img1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/images/img1.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/images/img1.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/images/img1.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/images/img1.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "//images/img1.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/images/img1.jpg",
    title: "Title 7",
    id: 7,
  },
]

const Card = ({ card }) => {
  return (
    <a key={card.id} href='/sketches/name1'>
      <img src='/images/img1.jpg' alt='sketch name 1'></img>
    </a>
  )
}
