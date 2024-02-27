import "./styles/main.scss"
import { Suspense, useState } from "react"
import { Menu } from "./componenets/common/Menu"
import { Experience } from "./componenets/experience/Experience"

const App = () => {
  const [section, setSection] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <>
      <Suspense fallback={null}>
        <Experience section={section} setSection={setSection} />
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
      </Suspense>
    </>
  )
}

export default App
