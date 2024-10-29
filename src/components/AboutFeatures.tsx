import { Box, Flex, Icon, Text } from "@chakra-ui/react";
interface IProps {
  icon: React.ElementType;
  text: string;
  text2?: string;
}

const AboutFeatures = ({ icon, text, text2 }: IProps) => {
  return (
    <Flex
      rounded={"md"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        rounded={"full"}
        bg={"#c1c1c1"}
        p={3}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bg={"black"}
          rounded={"full"}
          p={3}
        >
          <Icon as={icon} alt={text} boxSize={"35px"} color={"white"} />
        </Box>
      </Box>
      <Text fontSize={"20px"} fontWeight={"bold"} mt={"10px"} mb={"5px"}>
        {text}
      </Text>
      <Text
        fontSize={"md"}
        fontWeight={"medium"}
        _groupHover={{ color: "white" }}
      >
        {text2}
      </Text>
    </Flex>
  );
};

export default AboutFeatures;
