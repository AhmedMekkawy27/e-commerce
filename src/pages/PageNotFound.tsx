import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { breakpoints } from "../data";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Box py={"80px"}>
      {/* Breadcrumb Navigation */}
      <Container maxW={breakpoints}>
        <Flex gap={1}>
          <Text fontSize="sm" color="gray.500">
            Home
          </Text>
          <Text>/</Text>
          <Text fontSize="sm" fontWeight="semibold" color="gray.900">
            404 Error
          </Text>
        </Flex>
        <Flex
          flexDirection={"column"}
          gap={4}
          alignItems={"center"}
          mt={"40px"}
        >
          <Box
            as="h1"
            fontSize={{ md: "8xl", base: "4xl" }}
            fontWeight="medium"
          >
            404 Not Found
          </Box>
          <Text fontSize="sm" color="gray.900" mb={"40px"} textAlign={"center"}>
            Your visited page not found. You may go home page
          </Text>
          <Button
            as={Link}
            to={"/"}
            paddingY={6}
            bg={"red.500"}
            color={"white"}
            _hover={{ bg: "red.700" }}
          >
            Back To Home Page
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default PageNotFound;
