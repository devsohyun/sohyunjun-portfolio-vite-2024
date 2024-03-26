import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'

export const Menu = (props) => {
  const { menuOpened, setMenuOpened } = props
  const menuTimeline = useRef()

  useEffect(() => {
    const menuItems = document.querySelectorAll('.menu-item p')
    const overlay = document.querySelector('.overlay')
    const menuItemsArr = [...menuItems]

    gsap.set(menuItems, { y: -355 })
    gsap.set(overlay, { top: '-100vh' })

    menuTimeline.current = gsap.timeline({ paused: true })

    menuTimeline.current.to(overlay, {
      top: 0,
      duration: 1.5,
      ease: 'power4.inOut',
    })

    menuItemsArr.reverse().forEach((menuItems, index) => {
      menuTimeline.current.to(
        menuItems,
        {
          duration: 1,
          y: 0,
          delay: 0.2,
          stagger: 0.2,
          ease: 'power4.out',
        },
        '-=1'
      )
    })

    return () => {
      menuTimeline.current.kill() // Clean up the timeline
    }
  }, [])

  useEffect(() => {
    if (menuTimeline.current) {
      if (menuOpened) {
        menuTimeline.current.play()
      } else {
        if (!menuTimeline.current.paused()) {
          menuTimeline.current.reverse()
        }
      }
    }
  }, [menuOpened])

  const handleToggle = () => {
    setMenuOpened(!menuOpened)
  }

  return (
    <div className='menu'>
      <div className='menu-container'>
        <div className='menubar'>
          <div id='logo'>
            <motion.a
              href='https://sohyunjun.xyz/'
              animate={{
                color: menuOpened ? 'var(--color-darkgrey)' : 'var(--color-white)',
              }}
              transition={{ delay: menuOpened ? 0.3 : 1.5 }}
            >
              SOHYUNJUN
            </motion.a>
          </div>
          <motion.div
            className='menu-toggle'
            onClick={handleToggle}
            animate={{ rotate: menuOpened ? 135 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='line-container'>
              <motion.div
                className='horizontal-line'
                animate={{
                  background: menuOpened ? 'var(--color-darkgrey)' : 'var(--color-white)',
                }}
                transition={{ delay: menuOpened ? 0.3 : 1.5 }}
              ></motion.div>
              <motion.div
                className='vertical-line'
                animate={{
                  background: menuOpened ? 'var(--color-darkgrey)' : 'var(--color-white)',
                }}
                transition={{ delay: menuOpened ? 0.3 : 1.5 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
        <div className='overlay'>
          <div className='overlay-menu'>
            <div className='menu-item'>
              <p>
                <a href='#'>Projects</a>
              </p>
            </div>
            <div className='menu-item'>
              <p>
                <a href='#'>Sketches</a>
              </p>
            </div>
            <div className='menu-item'>
              <p>
                <a href='#'>About</a>
              </p>
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
        </div>
      </div>
    </div>
  )
}
