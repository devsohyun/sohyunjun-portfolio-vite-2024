import { useEffect } from 'react'
import { PropagateLoader } from 'react-spinners'

const Loader = ({ load }) => {
  const override = {
    top: '50%',
    left: '50%',
    display: 'flex',
    margin: '0 auto',
    borderColor: 'red',
  }

  useEffect(() => {
    console.log(load)
  }, [load])

  return (
    <div className={`loader ${load ? 'visible' : ''}`}>
      <PropagateLoader
        color={'#ffffff'}
        loading={load}
        cssOverride={override}
        size={15}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  )
}

export default Loader
