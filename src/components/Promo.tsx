// PromoSection.tsx
import React, { useEffect, useState } from "react";
import {
  Text,
  Heading,
  Button,
  HStack,
  VStack,
  Image,
  Container,
} from "@chakra-ui/react";
import { breakpoints } from "../data";

const PromoSection: React.FC = () => {
  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35,
  });

  // Countdown logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, days, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              days -= 1;
            }
          }
        }
        return { hours, days, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container
      bg="black"
      color="white"
      py={"100px"}
      px={{ base: "20px", lg: "80px" }}
      borderRadius="md"
      maxW={breakpoints}
      mx="auto"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={{ base: "column", lg: "row" }}
      gap={6}
    >
      {/* Left Content */}
      <VStack align="flex-start" spacing="8" maxW="500px">
        <Text color="green.400" fontWeight="bold">
          Categories
        </Text>
        <Heading fontSize="4xl" lineHeight="shorter">
          Enhance Your <br /> Music Experience
        </Heading>

        {/* Countdown */}
        <HStack spacing="4">
          <VStack
            bg={"white"}
            color={"black"}
            justifyContent={"center"}
            boxSize={"70px"}
            rounded={"full"}
          >
            <Text fontSize="xl" fontWeight="semibold" mb={"-4"}>
              {timeLeft.hours}
            </Text>
            <Text fontSize={"sm"}>Hours</Text>
          </VStack>
          <VStack
            bg={"white"}
            color={"black"}
            justifyContent={"center"}
            boxSize={"70px"}
            rounded={"full"}
          >
            <Text fontSize="xl" fontWeight="semibold" mb={"-4"}>
              {timeLeft.days}
            </Text>
            <Text fontSize={"sm"}>Days</Text>
          </VStack>
          <VStack
            bg={"white"}
            color={"black"}
            justifyContent={"center"}
            boxSize={"70px"}
            rounded={"full"}
          >
            <Text fontSize="xl" fontWeight="semibold" mb={"-4"}>
              {timeLeft.minutes}
            </Text>
            <Text fontSize={"sm"}>Minutes</Text>
          </VStack>
          <VStack
            bg={"white"}
            color={"black"}
            justifyContent={"center"}
            boxSize={"70px"}
            rounded={"full"}
          >
            <Text fontSize="xl" fontWeight="semibold" mb={"-4"}>
              {timeLeft.seconds}
            </Text>
            <Text fontSize={"sm"}>Seconds</Text>
          </VStack>
        </HStack>

        {/* Buy Now Button */}
        <Button
          colorScheme="green"
          alignSelf={{ base: "center", lg: "start" }}
          size="lg"
        >
          Buy Now!
        </Button>
      </VStack>

      {/* Right Content: Product Image */}

      <Image
        src="/boom-box.png" // Replace with actual image URL
        alt="JBL Speaker"
        maxW={{ base: "full", md: "500px" }}
        objectFit="contain"
      />
    </Container>
  );
};

export default PromoSection;
