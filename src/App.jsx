import "./styles/main.scss"
import { Suspense, useState } from "react"
import { Nav } from "./componenets/common/Nav"
import { Experience } from "./componenets/experience/Experience"

const App = () => {
  const [section, setSection] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <>
      <Suspense fallback={null}>
        <Experience section={section} setSection={setSection} />
        <Nav
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
      </Suspense>
    </>
  )
}

export default App
