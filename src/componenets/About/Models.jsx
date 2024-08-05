import { useGLTF } from "@react-three/drei"
import { useState } from "react"

const Models = ({shownIndex, models}) => {
	const _models = useGLTF(models)
	const [indexScenes] = useState([shownIndex, (shownIndex + 1) % models.length])
  return (
    <>
      
    </>
  )
}

export default Models
