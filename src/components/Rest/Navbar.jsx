import { Image, Button, Flex, Box, useDisclosure } from '@chakra-ui/react';
import Head from '../Header/Head';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <Head />

      <Box alignItems="center">
        <Flex
          className="nav"
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          p="1rem"
          minHeight="8rem"
          color="white"
        >
          <Flex align="center" mr={5}>
            <Button
              display={{ base: 'block', md: 'none' }}
              onClick={onToggle}
              variant="ghost"
              _focus={{ outline: 'none' }}
            >
              {isOpen ? (
                <CloseIcon w={6} h={6} />
              ) : (
                <HamburgerIcon w={6} h={6} />
              )}
            </Button>
            <Box>
              <Image
                src="./public/img/logo.svg"
                height="2.5rem"
                alt="Description of the image"
              />
            </Box>
          </Flex>

          <Box
            display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
            flexBasis={{ base: '100%', md: 'auto' }}
          >
            <Flex
              align="center"
              justify={['center', 'space-between', 'flex-end', 'flex-end']}
              direction={['column', 'row', 'row', 'row']}
              pt={[4, 0, 0, 0]}
              gap="1rem"
            >
              <NavLink to="/" activeStyle={{ fontWeight: 'bold' }}>
                Home
              </NavLink>

              <NavLink to="/profile" activeStyle={{ fontWeight: 'bold' }}>
                Profile
              </NavLink>

              <NavLink to="/subject" activeStyle={{ fontWeight: 'bold' }}>
                Subjects
              </NavLink>

              <NavLink to="/student" activeStyle={{ fontWeight: 'bold' }}>
                All students achievement
              </NavLink>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
