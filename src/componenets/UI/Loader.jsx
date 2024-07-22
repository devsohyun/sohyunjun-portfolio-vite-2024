import { useEffect } from "react"

const Loader = (props) => {
	const { load, page } = props

	useEffect(() => {
		console.log('loader', load)
		
	}, [load])

  return (
		<div className={`loader ${load ? 'visible' : ''}`}>
			<div>LOADING</div>
		</div>
	)
}

export default Loader
