import { motion } from "framer-motion"
import { useState } from "react"

export const Nav = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='nav'>
      <div className='nav-container'>
        <div className='navbar'>
          <div id='logo'>
            <a href='https://sohyunjun.xyz/'>SOHYUNJUN</a>
          </div>
          <motion.div
            className='menu-toggle'
            onClick={() => setIsActive(!isActive)}
            animate={{ rotate: isActive ? 135 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className='line-container'>
              <div className='horizontal-line'></div>
              <div className='vertical-line'></div>
            </div>
          </motion.div>
        </div>
        <div className='nav-overlay'></div>
      </div>
    </div>
  )
}
