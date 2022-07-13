import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Flex,
  Heading,
  Link,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  const bgColor = useColorModeValue("orange.300", "grassTeal");

  return (
    <NextLink href={href}>
      <Link
        pg={2}
        bg={active ? bgColor : undefined}
        color={active ? "#202023" : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={2}

      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW={"container.md"}
        wrap="wrap"
        align="center"
        justify="space-between"
        
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="top"
          pt="3px"
          flexGrow={1}
          fontFamily="Oswald"
          mt={{ base: 4, nmd: 0 }}
          
          >
          <LinkItem href="/projetos" path={path}>
            Projetos
          </LinkItem>
          <LinkItem href="/tecnologias" path={path}>
            Tecnologias
          </LinkItem>
          <LinkItem href="https://github.com/v-rossini" path={path}>
            Github
          </LinkItem>

        </Stack>

        <Box flex={1} align="right">
            < ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-flex", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
               />
               <MenuList>
                <NextLink href="/" passHref ><MenuItem as={Link}>Sobre</MenuItem></NextLink>
                <NextLink href="/projetos" passHref ><MenuItem as={Link}>Projetos</MenuItem></NextLink>
                <NextLink href="/tecnologias" passHref ><MenuItem as={Link}>Tecnologias</MenuItem></NextLink>
                <NextLink href="https://github.com/v-rossini" passHref ><MenuItem as={Link}>Github</MenuItem></NextLink>

               </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
