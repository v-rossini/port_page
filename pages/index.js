import { Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500","whiteAlpha.200")} mb={6} p={3} align = "center">
        Olá! Eu sou um desenvolvedor brasileiro com foco nas áreas de
        Desenvolvimento Web e Ciência de Dados.
      </Box>
      <Box display={{md:"flex"}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Vitor Rossini
          </Heading>
          <p>
            Desenvolvedor e Cientista de Dados
          </p>
        </Box>
      </Box>
        <Box flexShrink={0} mt={{base:4, md:0}} ml={{md: 6}} align="center">
          <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth= "150px" display="inline-block"
          borderRadius="full" alt="profile-pic" src="/images/profile_pic.jpg">

          </Image>
        </Box>
    </Container>
  );
};

export default Page;
