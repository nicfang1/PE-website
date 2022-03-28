import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Box,
  Button,
  Link
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import PriceTable from '../../components/pricetable'
import NextLink from 'next/link'

const Work = () => (
  <Layout title="Run to Empower">
    <Container>
      <Title>
        Run to Empower <Badge>2022-</Badge>
      </Title>
      <P>
        Project Empower’s very first initiative is a virtual walkathon named
        &apos;Run to Empower 2022&apos;. This fundraising event not only serves
        to help us raise enough funds to meet the financial needs of our
        upcoming initiatives, but also to raise awareness of our cause, which is
        to shed light on the importance of caregivers and the increasing
        negligence of their well-being. If our cause deeply resonates with you,
        then do join us on our journey to fulfil our vision by participating in
        this walkathon!
      </P>
      <List ml={4} my={4}>
        <Heading as="h4">Details</Heading>
        <ListItem>
          <Meta>Event Period</Meta>
          <span>1 May 2022 - 1 June 2022</span>
        </ListItem>
        <ListItem>
          <Meta>Who can join?</Meta>
          <span>All NUS Students</span>
        </ListItem>
        <ListItem>
          <Meta>Make a donation</Meta>
          <Link
            href="https://give.asia/campaign/run-to-empower-2022/"
            target="_blank"
          >
            <Button variant="ghost" colorScheme="teal">
              Give Asia
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Box align="center" my={4}>
            <NextLink
              href="https://docs.google.com/forms/d/e/1FAIpQLScycxbrMNzExaTiKRIUIPnNc8S-9hwe1Umbbe455msD2dkdcQ/viewform?usp=sf_link"
              scroll={false}
            >
              <Button rightIcon={<ExternalLinkIcon />} colorScheme="teal">
                Sign up now!
              </Button>
            </NextLink>
          </Box>
        </ListItem>
      </List>

      <PriceTable />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
