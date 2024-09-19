'use client'

import React, { useState, useEffect } from 'react'
import { MoveUp } from 'lucide-react'
import { motion } from 'framer-motion'

import { Button } from '~/components/ui/button'
import { ThemeSwitcher } from '~/components/common/theme-switcher'

/**
 * @function UtilsNavbar
 * @description Navbar for utilities component (ThemeSwitcher, Go to top)
 * @exports UtilsNavbar
 */
export const UtilsNavbar: React.FC = () => {
  // -- State
  const [isBottom, setIsBottom] = useState(false)

  // -- Functions
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const windowHeight = window.innerHeight
    const docHeight = document.body.offsetHeight

    if (windowHeight + scrollTop >= docHeight - 10) {
      setIsBottom(true)
    } else {
      setIsBottom(false)
    }
  }

  // -- Effect
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // -- Render
  return (
    <motion.div
      initial={{ bottom: '10px' }}
      animate={{ bottom: isBottom ? '70px' : '20px' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="fixed right-10 z-50 hidden flex-col items-center gap-4 md:flex"
    >
      <ThemeSwitcher />
      <Button variant="default" className="rounded-full p-3" onClick={goToTop}>
        <MoveUp size={16} />
      </Button>
    </motion.div>
  )
}
