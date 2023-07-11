import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Box,
  Icon,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { VscGithub } from 'react-icons/vsc';
import { BsFront, BsBack } from 'react-icons/bs';
import { SiGoogleanalytics, SiPhp } from 'react-icons/si';
import { BiChevronDown } from 'react-icons/bi';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Index = () => {
  interface CardProps {
    heading: string;
    description: string;
    icon: ReactElement;
    href?: string;
  }
  
  const handleScroll = (ref: string) => {
    const section = document.querySelector( '#'+ref );
    section?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  }  
  
  const downloadCV = () => {
    console.log('download CV');
  }  

  const Card = ({ heading, description, icon }: CardProps) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
        </Stack>
      </Box>
    );
  };

  return (
    <Stack direction={'column'}>
      <Stack 
        minH={{base:'auto', lg:'100vh'}} 
        direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading 
              fontSize={{ base: 'lg', md: '2xl', lg: '2xl' }}            
              fontStyle={'system-ui, sans-serif'}
              >
              <Text
                as={'span'}
                color={'teal.500'}
                >
                Hi.. My Name is
              </Text>
              <br />{' '}
              <Text
                as={'span'}
                fontSize={{ base: '4xl', lg: '6xl' }}
                color={'teal.700'}
                >
                Fauzi Indra
              </Text>
              <br />{' '}
              <Text as={'span'}
                textTransform={'uppercase'}
                color={'teal.400'}
                fontWeight={600}
                fontSize={{ base: 'sm', lg: 'md' }}
                bg={useColorModeValue('teal.50', 'teal.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}>
                I'm a Software Engineer
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'sm', lg: 'md' }} color={'gray.500'}>
              Analytical Software Developer with more than 10 year track record of developing, testing and maintaining software programs.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'lg'}
                bg={'teal.400'}
                color={'white'}
                _hover={{
                  bg: 'teal.600',
                }}
                onClick={() => handleScroll('knowmemoreRef')}>
                Know me more
              </Button>
              <Button rounded={'lg'} color={'teal.600'} onClick={() => handleScroll('myworksRef')}>My Works</Button>
              <Flex align={'center'}>
                <Icon viewBox='0 0 200 200' color='teal.500'>
                  <path
                    fill='currentColor'
                    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                  />
                </Icon>
                <Text p={2}>Available for Freelance</Text>
              </Flex>
            </Stack>
          </Stack>
        </Flex>
        <Flex 
          flex={1} 
          justify={'center'}
          align={{sm: 'top', lg: 'center'}}
          position={'relative'}
          w={'full'}
          p={8} >
          <Box
            position={'relative'}
            height={{base: '212px', lg: '300px'}}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Login Image'}
              objectFit={'cover'}
              src={
                '../images/profile_landing.jpg'
              }
            />
          </Box>
        </Flex>
      </Stack>
      <Stack 
        minH={'100vh'} 
        id={'knowmemoreRef'}
        direction={{ base: 'column', md: 'row' }}>
        <Flex 
          flex={1} 
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
          p={8} >
          <Box
            position={'relative'}
            height={{ base: '224px', lg:'300px'}}
            rounded={'2xl'}
            boxShadow={'dark-lg '}
            width={'50%'}
            overflow={'hidden'}>
            <Image
              alt={'Personal'}
              objectFit={'cover'}
              src={
                '../images/personal.jpg'
              }
            />
          </Box>
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading color={'teal.800'} fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
              About Me
            </Heading>
            <Text fontSize={{ base: 'sm', lg: 'md' }}>
              With more than 10 years experiences of software industry, I entering old school software development to startup era on agile scrum board.
              From junior programmer to senior software engineer (I also enjoyed my past role as co-founder and freelance programmer). 
              A self-starter, love to code, and eager to learn new things to enrich my skill, knowledge and experience.
              Love nature and explore an outdoor activities on sparetime (but still bring a laptop <span>&#128516;</span>).
            </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }}>
              Currently working for Lifepal Technologies (no 1 Insurance Marketplace in Indonesia) as Senior Software Engineer at the front-end side. 
              My daily routine is working on 5 repositories (develop and maintain), from blog as content sources (CMS) and bring it to the front-end of the company site products selling (the marketplace itself). 
              I accepted change request (CR) from SEO Team, Business and Marketing Team, Designer Team and definitely from Product Team as well. 
              We use some technologies such as wordpress, next.JS (react), GraphQL and some supporting technologies (typescript, javascript, bootstrap, scss, tailwind, etc).
            </Text>
          </Stack>
        </Flex>
      </Stack>
      <Stack 
        minH={'100vh'} 
        id={'skillsetRef'}
        direction={{ base: 'column', md: 'row', lg:'column' }}>
        <Box p={4}>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} color={'teal.800'}>
              Skill Set
            </Heading>
            <Text color={'teal.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
              Some of stack development I use (experienced).
            </Text>
          </Stack>

          <Container maxW={'5xl'} mt={12}>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              <Card
                heading={'Front-end'}
                icon={<Icon as={BsFront} w={10} h={10} color='teal.500'/>}
                description={
                  'As currently most of my work was on front end, especially on React based (Next.js) and its supporting technologies, such as bootstrap, tailwind, graphql, etc. Beside that I experienced as well on other Front End framework vue.js'
                }
                href={'#'}
              />
              <Card
                heading={'Collecting Website Data'}
                icon={<Icon as={SiGoogleanalytics} w={10} h={10} color='teal.500'/>}
                description={
                  'Partnering with Marketing team, makes me have to understand and learn Google Analytics and Google Tag Manager, and I involved on migrating to GA4'
                }
                href={'#'}
              />              
              <Card
                heading={'Back-end'}
                icon={<Icon as={BsBack} w={10} h={10} color='teal.500'/>}
                description={
                  'On my past as freelance programmer, I use JavaEE and node.js as back-end programming language.'
                }
                href={'#'}
              />
              <Card
                heading={'Git Version Control'}
                icon={<Icon as={VscGithub} w={10} h={10} color='teal.500'/>}
                description={
                  'Some of version control I used was Github, Gitlab, and Jetbrains'
                }
                href={'#'}
              />
              <Card
                heading={'Scripting Language'}
                icon={<Icon as={SiPhp} w={10} h={10} color='teal.500'/>}
                description={
                  'Wordpress is most popular content management system (CMS) on PHP based which SEO friendly, and I experience using this technology. Beside that on my past projects, I use Laravel as well'
                }
                href={'#'}
              />
            </Flex>
          </Container>
        </Box>
      </Stack>
      <Stack 
        minH={'50vh'} 
        id={'myworksRef'}
        p={8}
        direction={{ base: 'column', md: 'row', lg:'column' }}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} color={'teal.800'}>
            My Works (Working Experience)
          </Heading>
        </Stack>
        <Accordion allowMultiple width="100%" maxW="full" bg="white" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              _hover={{ bg: 'gray.100' }}>
              <Text fontSize="md">Senior Software Engineer (Aug 2021 - Present)</Text>
              <Icon as={BiChevronDown} w={10} h={10} />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text mb={2}>
                Working at PT. Lifepal Technologies as no 1 Insurance Marketplace in Indonesia, my jobs is on front-end, which are (but not limited to)
              </Text>
              <UnorderedList>
                <ListItem>Together with SEO team, working on maintaining our site always number 1 on SERP.</ListItem>
                <ListItem>With Business and Marketing Team, we support them with some promo pages for campaigns, delivered to customers, capture user action (GTM, GA, and other third parties) and maintain the traffic site.</ListItem>
                <ListItem>With the Designer Team, we are communicating to ensure the design implemented accordingly.</ListItem>
                <ListItem>And with product team, we have to follow dynamically and rapidly product changes from them.</ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              _hover={{ bg: 'gray.100' }}>
              <Text fontSize="md">Freelance Programmer (Feb 2018 - July 2021)</Text>
              <Icon as={BiChevronDown} w={10} h={10} />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text mb={2}>
                Developed some websites using some different programming languages (as customer requested), being part of a team. I was participate in pre-project analysis and technical assessments to develop user-friendly interface and correct functionality to meet business objectives. Here some projects I have done :
              </Text>
              <UnorderedList>
                <ListItem>Startup Garuda Ticketing (Flylist/2018) : front-end using React and Redux</ListItem>
                <ListItem>Startup Marketplace Booking Ticket (Sabre International/2018) : front-end using React and Redux</ListItem>
                <ListItem>In-House Application for Investment (Pacific Capital Investment/2019) : front-end using PHP Laravel + Eloquent</ListItem>
                <ListItem>Clinical Laboratoy Information System (Healtri Teknologi/2019) : front-end using Vue.js and back-end using JavaEE</ListItem>
                <ListItem>General Affair Apps (MRT Jakarta /2020) : front end using Vue.js and back-end using Node.JS</ListItem>
                <ListItem>Survey ATG Pertamina (Surveyor Indonesia/2021) : front-end using Vue.js</ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Stack spacing={4} as={Container} maxW={'sm'} textAlign={'center'}>
          <Button
            rounded={'lg'}
            bg={'teal.400'}
            color={'white'}
            _hover={{
              bg: 'teal.600',
            }}  
            onClick={() => downloadCV()}
          >
            Download CV
          </Button>
        </Stack>
      </Stack>
      <Stack 
        minH={'100vh'} 
        id={'contactRef'}
        p={8}
        direction={{ base: 'column', md: 'row', lg:'column' }}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} color={'teal.800'}>
            Contact Me
          </Heading>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Flex justify="center" gridGap={3} >
              <Icon mt={1} as={HiMail} w={5} h={5} color='teal.500'/>
              <Text>efuzindra@gmail.com</Text>
            </Flex>
            <Flex justify="center" gridGap={3} >
              <Icon as={HiPhone} w={5} h={5} color='teal.500'/>
              <Text>+62 896-6242-2021</Text>
            </Flex>
            <Flex justify="center" gridGap={3} >
              <Icon as={HiLocationMarker} w={5} h={5} color='teal.500'/>
              <Text>Depok West Java Indonesia</Text>
            </Flex>
          </Flex>
        </Stack>
      </Stack>
    </Stack>    
  );
}

export default Index;
