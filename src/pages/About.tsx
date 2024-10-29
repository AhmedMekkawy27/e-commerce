import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { aboutCards, aboutFeatures, breakpoints, sales } from "../data";
import CategoryCard from "../components/CategoryCard";
import Card from "../components/Card";
import AboutFeatures from "../components/AboutFeatures";

const About = () => {
  return (
    <Box mt={"70px"}>
      <Container maxW={breakpoints}>
        <HStack>
          <Box as="span" color={"#7d8184"}>
            Home
          </Box>
          <Box as="span">/</Box>
          <Box as="span" fontWeight={"semibold"}>
            About
          </Box>
        </HStack>
      </Container>
      <Box overflow={"hidden"} mt={"50px"}>
        <Container
          as={Flex}
          justifyContent={"center"}
          alignItems={"center"}
          maxW={breakpoints}
          pos={"relative"}
        >
          <VStack
            w={{
              "2xl": "60%",
              md: "80%",
              lg: "100%",
              xl: "70%",
              base: "100%",
            }}
            alignItems={"start"}
            spacing={6}
          >
            <Text as={"h1"} fontSize={"6xl"} fontWeight={"semibold"}>
              Our Story
            </Text>
            <Text fontWeight={"medium"}>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </Text>
            <Text fontWeight={"medium"}>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </Text>
          </VStack>
          <Image
            src="../../public/about-top-image.jpg"
            w={"60%"}
            display={{ base: "none", lg: "block" }}
            pos={"relative"}
            left={"14%"}
          />
        </Container>
      </Box>
      <Container maxW={breakpoints} my={"40px"}>
        <Grid
          templateColumns={"repeat(auto-fill, minmax(290px, 1fr))"}
          gap={6}
          mx={"auto"}
        >
          {sales.map((s) => (
            <GridItem key={s.text} justifyContent={"center"} display={"flex"}>
              <CategoryCard
                text={s.text}
                icon={s.icon}
                w="270px"
                h="230px"
                boxSize={s.boxsize}
                text2={s.text2}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>

      <Container maxW={breakpoints} my={"120px"}>
        <Grid
          templateColumns={"repeat(auto-fill, minmax(380px, 1fr))"}
          gap={6}
          mx={"auto"}
        >
          {aboutCards.map((card) => (
            <GridItem key={card.job} justifyContent={"center"} display={"flex"}>
              <Card image={card.image} title={card.title} job={card.job} />
            </GridItem>
          ))}
        </Grid>
        <Flex gap={3} mt={"40px"} justifyContent={"center"}>
          {Array(5)
            .fill("")
            .map((_, i) => (
              <Box
                key={i}
                w={"15px"}
                h={"15px"}
                bg={i === 2 ? "#db4444" : "#b3b3b3"}
                outline={i === 2 ? "2px solid #b3b3b3" : "0"}
                border={i === 2 ? "2px solid white" : "0"}
                rounded={"full"}
              />
            ))}
        </Flex>
      </Container>
      <Container maxW={breakpoints} my={"120px"}>
        <Grid
          templateColumns={"repeat(auto-fill, minmax(380px, 1fr))"}
          gap={6}
          mx={"auto"}
        >
          {aboutFeatures.map((feat) => (
            <GridItem
              key={feat.text}
              justifyContent={"center"}
              display={"flex"}
            >
              <AboutFeatures
                icon={feat.icon}
                text={feat.text}
                text2={feat.text2}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
