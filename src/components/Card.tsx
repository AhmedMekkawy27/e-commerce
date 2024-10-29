import { Box, Heading, Text, Stack, Image, Icon } from "@chakra-ui/react";
import { PiTwitterLogo } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io5";
import { RiLinkedinLine } from "react-icons/ri";
interface IProps {
  title: string;
  image: string;
  job: string;
}
export default function Card({ title, image, job }: IProps) {
  return (
    <Box
      w={"370px"}
      bg={"white"}
      rounded={"md"}
      display={"flex"}
      flexDirection={"column"}
      gap={6}
    >
      <Box bg={"gray.100"} roundedTop={"md"} h={"500px"} overflow={"hidden"}>
        <Image src={image} alt="Example" />
      </Box>
      <Stack flexDirection={"column"} justifyContent={"center"} rounded={"md"}>
        <Heading
          color={"black"}
          fontSize={"3xl"}
          fontWeight={"semibold"}
          fontFamily={"body"}
          letterSpacing={1}
        >
          {title}
        </Heading>
        <Text color={"black"} fontWeight={"medium"}>
          {job}
        </Text>
        <Stack direction={"row"} spacing={4} fontSize={"sm"}>
          <Icon as={PiTwitterLogo} boxSize={"25px"} />
          <Icon as={IoLogoInstagram} boxSize={"25px"} />
          <Icon as={RiLinkedinLine} boxSize={"25px"} />
        </Stack>
      </Stack>
    </Box>
  );
}
