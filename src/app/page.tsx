import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Container } from '~/components/common/container'
import { FeaturesList } from '~/components/features/features-list'
import { LogoTestimonial } from '~/components/logo-testimonial'
import { Button } from '~/components/ui/button'
import { Heading } from '~/components/ui/heading'
import { GRAPH } from '~/lib/constants/common'

/**
 * @function Home
 * @description Home page
 * @returns {JSX.Element} JSX.Element
 * @exports Home
 */
export default function Home(): JSX.Element {
  // --- Render
  return (
    <div className="mt-32">
      <Container className="gap-10">
        <Heading align="center" variant="h1" as="h1">
          Predictable <br /> growth starts here
        </Heading>
        <p className="w-2/3 text-center text-lg text-neutral-600 dark:text-neutral-300">
          Squaree helps users to go from Zero to Hero with Pockets flow’s simple
          platform that helps creators like you sell their digital products
          online.
        </p>
      </Container>
      <FeaturesList />
      <Container className="mt-36">
        <span className="text-center text-lg font-bold text-neutral-600/50 dark:text-neutral-300/50">
          We have the fast paced growing companies with us
        </span>
        <LogoTestimonial />
      </Container>
      <Container className="mt-48 gap-5">
        <Heading align="center" variant="h2" as="h2">
          Turn your growth in to Squaree
        </Heading>
        <p className="w-2/3 text-center text-lg text-neutral-600 dark:text-neutral-300">
          The expectation that productivity should always lead to tangible
          results or accomplishments & notion that certain types of work or
          activities are more valuable or productive than others.
        </p>
        <Image src="/images/graph.svg" width={800} height={400} alt="Graph" />
        <ul className="mt-10 flex items-center justify-center gap-28">
          {GRAPH.map((item, index) => (
            <li key={index} className="flex flex-col items-center gap-3">
              <span className="font-title text-6xl font-bold text-neutral-800 dark:text-neutral-200">
                {item.number}%
              </span>
              <p className="w-2/3 text-center text-lg text-neutral-500">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
        <Button
          variant="default"
          className="text-bold mt-10 flex items-center gap-1 rounded-full bg-yellow-main px-6 py-3 text-lg font-bold text-neutral-100 hover:bg-yellow-500"
        >
          Explore our way
          <ArrowRight size={24} />
        </Button>
      </Container>
    </div>
  )
}
