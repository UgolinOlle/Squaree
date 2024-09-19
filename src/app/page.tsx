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
    <Container>
      <Heading align="center" variant="h1" as="h1">
        Predictable <br /> growth starts here
      </Heading>
    </Container>
  )
}
