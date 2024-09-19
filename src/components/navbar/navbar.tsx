'use client'

import React from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'

import { DropdownMenu } from '~/components/ui/dropdown'

/**
 * @function Navbar
 * @description Composant pour la barre de navigation avec des menus déroulants animés
 * @exports Navbar
 */
export const Navbar: React.FC = () => {
  // --- Variables
  const dropdownData = [
    {
      label: 'Features',
      items: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      label: 'Ressources',
      items: ['Documentation', 'Guides', 'API Reference'],
    },
    {
      label: 'Company',
      items: ['About Us', 'Careers', 'Contact'],
    },
  ]

  // --- Render
  return (
    <nav className="mx-44 my-10 flex items-center justify-between rounded-3xl bg-background px-8 py-3 shadow-md">
      {/* --- Logo & Company name --- */}
      <div className="flex items-center gap-3">
        <Image
          src="/logo/squaree.svg"
          alt="Squaree Logo"
          width={30}
          height={30}
        />
        <span className="font-bold text-primary">Squaree</span>
      </div>

      {/* --- Menu --- */}
      <ul className="flex space-x-4">
        {dropdownData.map((dropdown, index) => (
          <DropdownMenu
            key={index}
            label={dropdown.label}
            items={dropdown.items}
          />
        ))}
        <li className="cursor-pointer p-4 font-medium text-primary">
          Contact Sales
        </li>
      </ul>

      {/* --- Search icon --- */}
      <Search
        size={24}
        className="transform cursor-pointer transition duration-200 ease-in-out hover:rotate-3"
      />
    </nav>
  )
}
