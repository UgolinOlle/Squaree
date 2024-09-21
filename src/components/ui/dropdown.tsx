'use client'

import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * @interface DropdownMenuProps
 * @description Props for the DropdownMenu component
 * @property {string} label - The label of the dropdown menu
 * @property {string[]} items - The items of the dropdown menu
 */
interface DropdownMenuProps {
  label: string
  items: string[]
}

/**
 * @function DropdownMenu
 * @description Dropdown menu component with a popup animation
 * @exports DropdownMenu
 */
export const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items }) => {
  // --- Variables
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const isPopupOpen = isHovered || isClicked
  const menuRef = useRef<HTMLLIElement>(null)
  const popupVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      height: 0,
      width: 0,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 10,
      height: 170,
      width: 250,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      width: 0,
      transition: { duration: 0.1, delay: 0.1 },
    },
  }

  // --- Functions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsClicked(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsClicked(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleClick = () => {
    setIsClicked((prev) => !prev)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsClicked((prev) => !prev)
    }
  }

  // --- Return
  return (
    <li
      className="relative flex cursor-pointer items-center gap-2 p-4 font-medium text-primary"
      onClick={handleClick}
      ref={menuRef}
      aria-haspopup="true"
      aria-expanded={isPopupOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {label}
      <ChevronDown size={16} />
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            className="absolute left-0 top-full z-10 mt-2 w-48 rounded-3xl bg-white p-5 shadow-md ring-1 ring-black ring-opacity-5"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={popupVariants}
            role="menu"
            aria-label={`${label} menu`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ul className="py-1">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer rounded-md px-4 py-2 transition duration-200 ease-in-out hover:bg-gray-100"
                  role="menuitem"
                  tabIndex={-1}
                  onClick={() => setIsClicked(false)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}
