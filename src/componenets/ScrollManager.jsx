import { useHelper, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"


export const ScrollManager = (props) => {
	const { section, onSectionChange } = props

	const data = useScroll()
	const lastScroll = useRef(0)
	const isAnimating = useRef(false)

	return null
}