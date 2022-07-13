import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 250ms ease;
  }
  &:hover img {
    transform: rotate(30deg);
  }`

const Logo = () => {
  const graphLogoImg = `/images/logo_231${useColorModeValue(
    "_light",
    "_dark"
  )}.png`;

  return (
    <Link href="/">
      <a>
        {" "}
        <LogoBox>
          <Image src={graphLogoImg} width={30} height={30} alt="logo" />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily="Poppins"
            fontWeight="bold"
            ml={3}>
             Vitor Rossini
          </Text>
            </LogoBox>{" "}
      </a>
    </Link>
  );
};

export default Logo;