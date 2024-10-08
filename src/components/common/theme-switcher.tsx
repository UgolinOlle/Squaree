'use client'

import React, { useState, useEffect, useRef } from 'react'
import { MoonIcon, SunIcon, Monitor, SwatchBook } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'

import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'

/**
 * @function ThemeSwitcher
 * @description Component to switch theme between light and dark
 * @exports ThemeSwitcher
 */
export const ThemeSwitcher: React.FC = () => {
  // --- Variables
  const { theme, setTheme } = useTheme()
  const [showPopup, setShowPopup] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)

  // --- Functions
  const togglePopup = () => setShowPopup((prev) => !prev)

  const themes = [
    { name: 'System', icon: <Monitor size={18} /> },
    { name: 'Light', icon: <SunIcon size={18} /> },
    { name: 'Dark', icon: <MoonIcon size={18} /> },
  ]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowPopup(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [popupRef])

  // --- Render
  return (
    <div className="relative">
      <Button
        variant="default"
        onClick={togglePopup}
        className={cn('rounded-full p-3')}
      >
        <AnimatePresence mode="wait" initial={false}>
          <SwatchBook size={16} />
        </AnimatePresence>
      </Button>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 right-12 z-10 mt-2 w-32 rounded-lg border border-neutral-200 bg-white py-2 text-neutral-800 shadow-md dark:border-neutral-700 dark:bg-neutral-900/70 dark:text-neutral-200"
          >
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => {
                  console.log(t.name.toLowerCase())
                  setTheme(t.name.toLowerCase())
                  setShowPopup(false)
                }}
                className={cn(
                  'flex w-full items-center px-4 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-700',
                  theme === t.name.toLowerCase() && 'font-bold'
                )}
              >
                {t.icon}
                <span className="ml-2">{t.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
