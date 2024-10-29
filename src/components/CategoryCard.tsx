import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IProps {
  icon: React.ElementType;
  text: string;
  text2?: string;
  w?: string;
  h?: string;
  maxW?: string;
  boxSize: string;
}

const CategoryCard = ({ icon, text, text2, w, h, boxSize, maxW }: IProps) => {
  return (
    <Flex
      as={Link}
      to={"/products"}
      w={w}
      h={h}
      maxW={maxW}
      border={"1px solid #b3b3b3"}
      rounded={"md"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      _hover={{ backgroundColor: "#db4444" }}
      className="group"
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        rounded={"full"}
        bg={`${text2 ? "#c1c1c1" : "transparent"}`}
        _groupHover={{
          bg: `${text2 ? "#c1c1c1" : "#db4444"}`,
        }}
        p={2}
      >
        <Box
          display={"flex"}
          _groupHover={{
            bg: `${text2 ? "white" : "#db4444"}`,
          }}
          justifyContent={"center"}
          alignItems={"center"}
          bg={`${text2 ? "black" : "white"}`}
          rounded={"full"}
          p={2}
        >
          <Icon
            as={icon}
            alt={text}
            boxSize={boxSize}
            color={`${text2 ? "white" : "black"}`}
            _groupHover={{
              color: text2 ? "black" : "white",
            }}
          />
        </Box>
      </Box>
      <Text
        fontSize={`${text2 ? "4xl" : "18px"}`}
        _groupHover={{ color: "white" }}
        mt={"10px"}
      >
        {text}
      </Text>
      {text2 && (
        <Text
          fontSize={"md"}
          fontWeight={"medium"}
          _groupHover={{ color: "white" }}
        >
          {text2}
        </Text>
      )}
    </Flex>
  );
};

export default CategoryCard;
