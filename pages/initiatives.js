import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import R2E from '../public/images/R2E.png'

const Works = () => (
  <Layout title="Intiatives">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Initiatives
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="R2E" title="Run to Empower" thumbnail={R2E}>
            Project Empower&apos;s very first initiative is a virtual walkathon
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
