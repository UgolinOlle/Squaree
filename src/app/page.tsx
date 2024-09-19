import { Container } from '~/components/common/container'
import { Heading } from '~/components/ui/heading'

/**
 * @function Home
 * @description Home page
 * @returns {JSX.Element} JSX.Element
 * @exports Home
 */
export default function Home(): JSX.Element {
  return (
    <Container className="mt-32">
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
    </Container>
  )
}
