import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Image, Text, Flex, Button } from "@chakra-ui/react";
const FadeCarousel = () => {
  return (
    <Box
      w={"full"}
      maxH={"fit-content"}
      bg={"black"}
      pt={"70px"}
      pb={"20px"}
      ml={4}
      mt={8}
    >
      <Flex
        justifyContent={{ lg: "center", base: "start" }}
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ lg: "start", base: "center" }}
        gap={{ lg: "0", base: "10px" }}
      >
        <Flex
          flexDirection={"column"}
          gap={4}
          alignItems={{ lg: "start", base: "center" }}
        >
          <Flex gap={5} alignItems={"center"}>
            <Image w={"50px"} src={"/apple.svg"} />
            <Text fontSize={"lg"} fontWeight={"medium"} color={"white"}>
              iPhone 14 Series
            </Text>
          </Flex>
          <Text
            as={"h2"}
            fontSize={{ "2xl": "6xl", xl: "5xl", lg: "3xl", base: "2xl" }}
            maxW={"400px"}
            color={"white"}
          >
            Up to 10% off Voucher
          </Text>
          <Button
            maxW={"fit-content"}
            color={"white"}
            background={"none"}
            borderBottom={"1px"}
            borderBottomColor={"white"}
          >
            Shop Now <ArrowForwardIcon ml={"5px"} />
          </Button>
        </Flex>
        <Image
          w={{ "2xl": "600px", xl: "400px", lg: "300px" }}
          h={"auto"}
          src={"/iPhone.jpg"}
        />
      </Flex>
      <Flex gap={3} justifyContent={"center"}>
        {Array(5)
          .fill("")
          .map((_, i) => (
            <Box
              key={i}
              w={"15px"}
              h={"15px"}
              bg={"gray.500"}
              rounded={"full"}
            />
          ))}
      </Flex>
    </Box>
  );
};

export default FadeCarousel;
