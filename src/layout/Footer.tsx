"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Grid,
  Flex,
  Image,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";
import { breakpoints } from "../data";
import { Link } from "react-router-dom";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={"black"} color={"white"}>
      <Container as={Stack} maxW={breakpoints} py={"80px"}>
        <Grid templateColumns={"repeat(auto-fill, minmax(280px, 1fr))"} gap={6}>
          <Stack spacing={6}>
            <Flex flexDirection={"column"} gap={2}>
              <Text as={"a"} fontSize={"2xl"}>
                Exclusive
              </Text>
              <Text fontSize={"xl"}>Subscribe</Text>
              <Text fontSize={"md"} mt={"10px"}>
                Get 10% off your first order
              </Text>
            </Flex>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={"blackAlpha.100"}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
                maxW={"220px"}
              />
              <IconButton
                bg={"transparent"}
                color={"white"}
                aria-label="Subscribe"
                icon={<BiMailSend />}
                ms={"-50px"}
                _hover={{ bg: "transparent" }}
              />
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Text>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</Text>
            <Text>exclusive@gmail.com</Text>
            <Text>+88015-88888-9999</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Account</ListHeader>
            <Box as={Link} to={"profile"}>
              My Account
            </Box>
            <Box as={Link} to={"/login"}>
              Login / Register
            </Box>
            <Box as={Link} to={"/cart"}>
              Cart
            </Box>
            <Box as={Link} to={"/wishlist"}>
              Wishlist
            </Box>
            <Box as={Link} to={"/products"}>
              Shop
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Quick Link</ListHeader>
            <Box as="a" href={"#"}>
              Privacy Policy
            </Box>
            <Box as="a" href={"#"}>
              Terms of Use
            </Box>
            <Box as="a" href={"#"}>
              FAQ
            </Box>
            <Box as="a" href={"#"}>
              Contact
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Download App</ListHeader>
            <Text color={"#fafafa"}>Save $3 with App New User Only</Text>
            <Stack direction={"row"} gap={3} alignItems={"center"}>
              <Image src="../../public/qr.jpg" />
              <Stack direction={"column"}>
                <Image
                  w={"150px"}
                  border={"1px solid white"}
                  rounded={"md"}
                  src="../../public/google-play.png"
                />
                <Image
                  w={"150px"}
                  border={"1px solid white"}
                  rounded={"md"}
                  src="../../public/app-store.png"
                />
              </Stack>
            </Stack>
            <Stack direction={"row"} w={"full"} spacing={8}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaFacebookF />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FiTwitter />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FiInstagram />
              </SocialButton>
              <SocialButton label={"Linkedin"} href={"#"}>
                <FaLinkedinIn />
              </SocialButton>
            </Stack>
          </Stack>
        </Grid>
      </Container>
      <Text
        borderTop={"1px solid #141414"}
        fontSize={"sm"}
        color={"#3d3d3d"}
        textAlign={"center"}
        py={6}
      >
        © Copyright Rimel 2022. All right reserved
      </Text>
    </Box>
  );
}
