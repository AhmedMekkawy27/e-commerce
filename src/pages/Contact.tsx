import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { breakpoints } from "../data";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <Box my={"150px"}>
      <Container maxW={breakpoints}>
        <HStack>
          <Box as="span" color={"#7d8184"}>
            Home
          </Box>
          <Box as="span">/</Box>
          <Box as="span" fontWeight={"semibold"}>
            Contact
          </Box>
        </HStack>
      </Container>
      <Box overflow={"hidden"} mt={"50px"}>
        <Container maxW={breakpoints}>
          <Grid templateColumns={"400px 1fr"} gap={"40px"} py={4}>
            <GridItem
              minH={"full"}
              gridColumn={{ base: "1 / -1", lg: "1 / 2" }}
            >
              <Box boxShadow={"lg"} p={8} minH={{ lg: "full" }}>
                <Flex
                  flexDirection={"column"}
                  gap={3}
                  pb={6}
                  borderBottom={"1px solid"}
                >
                  <Flex alignItems={"center"} gap={3}>
                    <Flex
                      justifyContent={"center"}
                      mb={"5px"}
                      alignItems={"center"}
                      rounded={"full"}
                      p={3}
                      bg={"#db4444"}
                    >
                      <Icon color={"white"} as={BsTelephone} boxSize={"20px"} />
                    </Flex>
                    <Text fontWeight={"semibold"}>Call Us</Text>
                  </Flex>
                  <Text fontSize={"14px"} fontWeight={"medium"}>
                    We are available 24/7, 7 days a week.
                  </Text>
                  <Text fontSize={"14px"} fontWeight={"medium"}>
                    Phone: +8801611112222
                  </Text>
                </Flex>

                <Flex flexDirection={"column"} gap={3} pt={6}>
                  <Flex alignItems={"center"} gap={3}>
                    <Flex
                      justifyContent={"center"}
                      mb={"5px"}
                      alignItems={"center"}
                      rounded={"full"}
                      p={3}
                      bg={"#db4444"}
                    >
                      <Icon
                        as={MdOutlineMailOutline}
                        color={"white"}
                        boxSize={"20px"}
                      />
                    </Flex>
                    <Text fontWeight={"semibold"}>Write To Us</Text>
                  </Flex>
                  <Text fontSize={"14px"} fontWeight={"medium"}>
                    Fill out our form and we will contact you within 24 hours.
                  </Text>
                  <Text fontSize={"14px"} fontWeight={"medium"}>
                    Emails: customer@exclusive.com
                  </Text>
                  <Text fontSize={"14px"} fontWeight={"medium"}>
                    Emails: support@exclusive.com
                  </Text>
                </Flex>
              </Box>
            </GridItem>
            <GridItem gridColumn={{ base: "1 / -1", lg: "2 / -1" }}>
              <Box boxShadow={"lg"} p={8}>
                <Grid
                  templateColumns={"repeat(auto-fill, minmax(290px, 1fr))"}
                  gap={6}
                  mb={8}
                >
                  <Input
                    type="text"
                    placeholder="Your Name"
                    bg={"#f5f5f5"}
                    h={"45px"}
                  />
                  <Input
                    type="text"
                    placeholder="Your Email"
                    bg={"#f5f5f5"}
                    h={"45px"}
                  />
                  <Input
                    type="text"
                    placeholder="Your Password"
                    bg={"#f5f5f5"}
                    h={"45px"}
                  />
                </Grid>
                <Textarea placeholder="Your Message" rows={8} bg={"#f5f5f5"} />
                <Flex justifyContent={"flex-end"} mt={6}>
                  <Button
                    bg={"#db4444"}
                    w={"250px"}
                    h={"60px"}
                    color={"white"}
                    fontWeight={"semibold"}
                    _hover={{ bg: "#c73737" }}
                  >
                    Send Message
                  </Button>
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
