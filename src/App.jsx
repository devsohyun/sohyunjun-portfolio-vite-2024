import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import './styles/main.scss'
const Webgl = lazy(() => import('./componenets/Webgl'))

const App = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Webgl page={'home'} />} />
          <Route path="/projects" element={<Webgl page={'projects'} />} />
          <Route path="/sketches" element={<Webgl page={'sketches'} />} />
          <Route path="/about" element={<Webgl page={'about'} />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
