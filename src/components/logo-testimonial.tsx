import Image from 'next/image'

import { LOGOS } from '~/lib/constants/common'

/**
 * @function LogoTestimonial
 * @description Component that displays the logo testimonial
 * @exports LogoTestimonial
 */
export const LogoTestimonial: React.FC = () => {
  // --- Render
  return (
    <ul className="mt-8 flex items-center justify-center gap-40">
      {LOGOS.map((logo, index) => (
        <li key={index} className="relative flex items-center gap-3">
          <Image src={logo.src} alt={logo.title} width={30} height={30} />
          <span className="font-title text-3xl font-bold text-neutral-800 dark:text-neutral-300">
            {logo.title}
          </span>
          {logo.title === 'Hikkeno' && (
            <span className="absolute -right-3 top-1 h-1 w-1 rounded-full bg-black" />
          )}
        </li>
      ))}
    </ul>
  )
}
