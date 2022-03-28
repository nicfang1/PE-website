import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5'
import Image from 'next/image'
import InstagramEmbed from 'react-instagram-embed'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, we are a team of medical students from YLLSOM!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Project Empower
          </Heading>
          <p>For the Caregivers</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/PElogo.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Who are we?
        </Heading>
        <Paragraph>
          Founded in January 2022, Project Empower is a Local Community
          Involvement Project (LCIP) under NUS Medical Society that aims to
          empower caregivers. We hope to advance society&apos;s caregiving
          readiness and raise awareness on the prevalence of caregiver burnout.
          To do so, we are adopting a multipronged approach, one that involves
          the collaboration of multiple stakeholders, in order to meet our
          goals.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/initiatives" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              What do we do?
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Upcoming Events
        </Heading>
        <BioSection>
          <BioYear>1 May - 1 June 2022</BioYear>
          <NextLink href="/initiatives/R2E" target="_blank">
            <Button variant="ghost" colorScheme="teal">
              Run to Empower
            </Button>
          </NextLink>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://www.facebook.com/Project-Empower-107679328546793"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                @Project Empower
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/projempower" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @projempower
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>

      <InstagramEmbed
        url="https://www.instagram.com/projempower/"
        clientAccessToken="284281590392120|808edb4c3e99371e6e20baf3313158c3"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
      />
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
