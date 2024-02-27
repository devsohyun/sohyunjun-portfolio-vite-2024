import { easeInOut, motion } from "framer-motion"
import { useState } from "react"
import { Link, Router } from "react-router-dom"

export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props

  return (
    <div className='menu'>
      <div className='menu-container'>
        <div className='menubar'>
          <div id='logo'>
            <motion.a
              href='https://sohyunjun.xyz/'
              animate={{
                color: menuOpened ? "var(--color-darkgrey)" : "var(--color-white)",
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
                  background: menuOpened ? "var(--color-darkgrey)" : "var(--color-white)",
                }}
                transition={{ delay: menuOpened ? 0 : 0.3 }}
              ></motion.div>
              <motion.div
                className='vertical-line'
                animate={{
                  background: menuOpened ? "var(--color-darkgrey)" : "var(--color-white)",
                }}
                transition={{ delay: menuOpened ? 0 : 0.3 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className='menu-overlay'
          animate={{ top: menuOpened ? 0 : "-100vh" }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 40,
            delay: menuOpened ? 0 : 0.6,
          }}
        >
          <div className='menu-links'>
            <div className='menu-item'>
              <motion.p
                animate={{ y: menuOpened ? 0 : '100%', opacity: menuOpened ? 1 : 0 }}
                transition={{
                  ease: easeInOut,
                  duration: 0.4,
                  delay: menuOpened ? 0.2 : 0 
                }}
              >
                <a href='#'>Projects</a>
              </motion.p>
            </div>
            <div className='menu-item'>
              <motion.p
                animate={{ y: menuOpened ? 0 : '100%', opacity: menuOpened ? 1 : 0 }}
                transition={{
                  ease: easeInOut,
                  duration: 0.4,
                  delay: menuOpened ? 0.4 : 0.2,
                }}
              >
                <a href='#'>Sketches</a>
              </motion.p>
            </div>
            <div className='menu-item'>
              <motion.p
                animate={{ y: menuOpened ? 0 : 100, opacity: menuOpened ? 1 : 0 }}
                transition={{
                  ease: easeInOut,
                  duration: 0.4,
                  delay: menuOpened ? 0.6 : 0.4,
                }}
              >
                <a href='#'>About</a>
              </motion.p>
            </div>
          </div>
          <div className='menu-footer'>
            <div className='menu-social-media'>
              <p>
                <a href='#'></a>Mail
              </p>
            </div>
            <div className='menu-social-media'>
              <p>
                <a href='#'></a>Instagram
              </p>
            </div>
            <div className='menu-social-media'>
              <p>
                <a href='#'></a>Twitter
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
