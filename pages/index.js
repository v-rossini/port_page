import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { KnowledgeSection, KnowledgeItem } from "../components/knowledge";

const Page = () => {
  return (
    <Container>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Vitor Rossini
          </Heading>
          <Paragraph>Desenvolvedor e Cientista de Dados</Paragraph>
        </Box>
      </Box>
      <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
        <Image
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          maxWidth="150px"
          display="inline-block"
          borderRadius="full"
          alt="profile-pic"
          src="/images/profile_pic.jpg"
        ></Image>
              <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        mb={6}
        p={3}
        align="center"
      >
        <Paragraph>
          Olá! Eu sou um desenvolvedor brasileiro com foco nas áreas de
          Desenvolvimento Web e Ciência de Dados.
        </Paragraph>
      </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Coisas
        </Heading>
        <Paragraph>
          Estudante de Engenharia Computacional na UFJF, com conhecimento nas
          áreas de engenharia de software, desenvolvimento de sistemas web com
          foco em backend, banco de dados, e ciencia de dados (englobando desde
          os processos de ETL, monitoração, análise estatística, criação de
          modelos de ML e extração de conhecimento). .
        </Paragraph>
        <Box>
          <NextLink href="/projetos">
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme={useColorModeValue("orange", "teal")}
            >
              Projetos
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Conhecimentos Técnicos
        </Heading>
        <Heading as="h4" variant="sub-section-title">
          Desenvolvimento Web
        </Heading>
        <KnowledgeSection>
          <KnowledgeItem>APIs REST</KnowledgeItem>
          Criação e deploy de APIs rest em Java e Node.JS, em arquiteturas hexagonais e de micro-serviços
        </KnowledgeSection>
        <KnowledgeSection>
          <KnowledgeItem>Bancos de Dados</KnowledgeItem>
          Relacionais (Postgres / MySql) e Não Relacionais, orientados a documentos (MongoDB) e Chave-Valor (DynamoDB e Redis)
        </KnowledgeSection>
        <KnowledgeSection>
          <KnowledgeItem>ORM e DDD</KnowledgeItem>
          Bem como normalização e projeto de bancos de dados, e Domain Driven Design
        </KnowledgeSection>
        <KnowledgeSection>
          <KnowledgeItem>DDD</KnowledgeItem>
          Ciação e deploy de APIs rest em Java e Node.JS
        </KnowledgeSection>

        <Heading as="h4" variant="sub-section-title">
          Análise, Ciência e Engenharia de Dados
        </Heading>
        <KnowledgeSection>
          <KnowledgeItem>Machine Learning e Modelagem Estatística</KnowledgeItem>
          Ciação, interpretação e treinamento de modelos supervisionados, não-supervisionados e em tempo real.
        </KnowledgeSection>
        <KnowledgeSection>
          <KnowledgeItem>Pipelines ETL</KnowledgeItem>
          Ciação e deploy de APIs rest em Java e Node.JS
        </KnowledgeSection>
        <KnowledgeSection>
          <KnowledgeItem>Data Warehouse / Lake</KnowledgeItem>
          Ciação e deploy de APIs rest em Java e Node.JS
        </KnowledgeSection>
        <KnowledgeSection>
          <KnowledgeItem>Análise Estatística</KnowledgeItem>
          Ciação e deploy de APIs rest em Java e Node.JS
        </KnowledgeSection>
        <KnowledgeSection>
          <KnowledgeItem>Visualização de dados</KnowledgeItem>
          Ciação e deploy de APIs rest em Java e Node.JS
        </KnowledgeSection>
        
      </Section>
    </Container>
  );
};

export default Page;
