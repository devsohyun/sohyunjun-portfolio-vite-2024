import { motion } from "framer-motion"
import { useState } from "react"
import { Link, Router } from "react-router-dom"

export const Nav = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props

  return (
    <div className='nav'>
      <div className='nav-container'>
        <div className='navbar'>
          <div id='logo'>
            <motion.a
              href='https://sohyunjun.xyz/'
              animate={{
                color: menuOpened ? "var(--color-black)" : "var(--color-white)",
              }}
              transition={{ delay: menuOpened ? 0 : 0.3 }}
            >
              SOHYUNJUN
            </motion.a>
          </div>
          <motion.div
            className='menu-toggle'
            onClick={() => setMenuOpened(!menuOpened)}
            animate={{ rotate: menuOpened ? 135 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='line-container'>
              <motion.div
                className='horizontal-line'
                animate={{
                  background: menuOpened ? "var(--color-black)" : "var(--color-white)",
                }}
                transition={{ delay: menuOpened ? 0 : 0.3 }}
              ></motion.div>
              <motion.div
                className='vertical-line'
                animate={{
                  background: menuOpened ? "var(--color-black)" : "var(--color-white)",
                }}
                transition={{ delay: menuOpened ? 0 : 0.3 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className='nav-overlay'
          animate={{ top: menuOpened ? 0 : "-100vh" }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 40,
          }}
        >
          <ul className='nav-links'>
            <li className='nav-item'>
              {/* 여기부터 작성 >> App에 Router로 정리해야함 */}
            </li>
          </ul>
          <div className='nav-footer'>
            <div className='nav-social-media'></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
