/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import ProductCarousel from "../components/ProductCarousel";
import SimpleSidebar from "../layout/Sidebar";
import { breakpoints, categoryData } from "../data";
import Fade from "../components/FadeCarousel";
import CategoryCard from "../components/CategoryCard";
import { useQuery } from "react-query";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { IDummyProduct } from "../interfaces";
import ItemsGrid from "../layout/home/ItemsGrid";
import { Link } from "react-router-dom";
const Home = () => {
  const getProductList = async () => {
    const data: any = await axios.get(
      "https://dummyjson.com/products?limit=8&skip=8"
    );
    return data;
  };

  const { isLoading, data } = useQuery("products", () => getProductList());
  return (
    <Box bg={"white"} overflow={"hidden"}>
      <Flex as={Container} maxW={breakpoints}>
        <SimpleSidebar />
        <Fade />
      </Flex>
      <Box mt={"80px"}>
        <Container maxW={breakpoints}>
          <Flex gap={"10px"} alignItems={"center"}>
            <Box w={"20px"} h={"40px"} background={"#db4444"} rounded={"md"} />
            <Text fontSize="xl" color={"#db4444"} fontWeight="bold">
              Today's
            </Text>
          </Flex>
          <Flex
            alignItems={"center"}
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: "20px", md: "40px" }}
            mb={{ base: "100px", md: "20px" }}
          >
            <Text fontSize={{ md: "5xl", base: "4xl" }} fontWeight={"semibold"}>
              Flash Sales
            </Text>

            <Flex alignItems={"center"}>
              <Box me={"15px"}>
                <Text fontWeight={"medium"} fontSize={"14px"}>
                  Days
                </Text>
                <Text textAlign={"center"} fontWeight={"bold"} fontSize={"4xl"}>
                  03
                </Text>
              </Box>
              <Box as="span" color={"#db4444"} fontSize={"40px"}>
                :
              </Box>
              <Box ms={"15px"} me={"20px"}>
                <Text fontWeight={"medium"} fontSize={"14px"}>
                  Hours
                </Text>
                <Text textAlign={"center"} fontWeight={"bold"} fontSize={"4xl"}>
                  23
                </Text>
              </Box>
              <Box as="span" color={"#db4444"} fontSize={"40px"}>
                :
              </Box>
              <Box ms={"10px"} me={"15px"}>
                <Text fontWeight={"medium"} fontSize={"14px"}>
                  Minutes
                </Text>
                <Text textAlign={"center"} fontWeight={"bold"} fontSize={"4xl"}>
                  19
                </Text>
              </Box>
              <Box as="span" color={"#db4444"} fontSize={"40px"}>
                :
              </Box>
              <Box ms={"10px"}>
                <Text fontWeight={"medium"} fontSize={"14px"}>
                  Seconds
                </Text>
                <Text textAlign={"center"} fontWeight={"bold"} fontSize={"4xl"}>
                  56
                </Text>
              </Box>
            </Flex>
          </Flex>
          <ProductCarousel slidesToShow={5}>
            {!isLoading &&
              data?.data?.products?.map((product: IDummyProduct) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  wishlist={false}
                />
              ))}
          </ProductCarousel>
          <Flex justifyContent={"center"} mt={"50px"}>
            <Button
              as={Link}
              to={"/products"}
              backgroundColor={"#db4444"}
              w={"200px"}
              h={"50px"}
              _hover={{ backgroundColor: "#a73131" }}
            >
              <Text fontWeight="semibold" color={"white"} fontSize="md">
                View All Products
              </Text>
            </Button>
          </Flex>
        </Container>
      </Box>
      <Container
        maxW={breakpoints}
        pb={"50px"}
        borderBottom={"1px solid #d9d9d9"}
        mb={"100px"}
        overflow={"hidden"}
      >
        <Flex gap={"10px"} alignItems={"center"}>
          <Box w={"20px"} h={"40px"} background={"#db4444"} rounded={"md"} />
          <Text fontSize="xl" color={"#db4444"} fontWeight="bold">
            Today's
          </Text>
        </Flex>
        <Flex
          alignItems={"center"}
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: "20px", md: "40px" }}
          mb={{ base: "100px", md: "20px" }}
        >
          <Text fontSize={{ md: "5xl", base: "4xl" }} fontWeight={"semibold"}>
            Browse By Category
          </Text>
        </Flex>
        <ProductCarousel slidesToShow={5}>
          {categoryData.map((category, idx) => (
            <CategoryCard
              key={idx}
              maxW="190px"
              h="170px"
              icon={category.icon}
              text={category.text}
              boxSize="60px"
            />
          ))}
        </ProductCarousel>
      </Container>

      <Container maxW={breakpoints}>
        <Flex gap={"10px"} alignItems={"center"}>
          <Box w={"20px"} h={"40px"} background={"#db4444"} rounded={"md"} />
          <Text fontSize="xl" color={"#db4444"} fontWeight="bold">
            This Month
          </Text>
        </Flex>
        <Flex
          alignItems={"center"}
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: "20px", md: "40px" }}
          mb={{ base: "100px", md: "20px" }}
          justifyContent={"space-between"}
        >
          <Text fontSize={{ md: "5xl", base: "4xl" }} fontWeight={"semibold"}>
            Best Selling Products
          </Text>
          <Button
            as={Link}
            to={"/products"}
            backgroundColor={"#db4444"}
            w={"200px"}
            h={"50px"}
            _hover={{ backgroundColor: "#a73131" }}
          >
            <Text fontWeight="semibold" color={"white"} fontSize="md">
              View All
            </Text>
          </Button>
        </Flex>
        <Box my={"50px"}>
          {!isLoading && (
            <ItemsGrid
              wishlist={false}
              products={data?.data?.products?.filter(
                (_: any, idx: number) => idx < 4
              )}
            />
          )}
        </Box>

        <Box my={"60px"}>
          <Flex gap={"10px"} alignItems={"center"}>
            <Box w={"20px"} h={"40px"} background={"#db4444"} rounded={"md"} />
            <Text fontSize="xl" color={"#db4444"} fontWeight="bold">
              Our Products
            </Text>
          </Flex>
          <Flex
            alignItems={"center"}
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: "20px", md: "40px" }}
            mb={{ base: "100px", md: "20px" }}
            justifyContent={"space-between"}
          >
            <Text fontSize={{ md: "5xl", base: "4xl" }} fontWeight={"semibold"}>
              Explore Our Products
            </Text>
          </Flex>
          {!isLoading && (
            <ItemsGrid wishlist={false} products={data?.data?.products} />
          )}
          <Flex justifyContent={"center"} mt={"50px"}>
            <Button
              as={Link}
              to={"/products"}
              backgroundColor={"#db4444"}
              w={"200px"}
              h={"50px"}
              _hover={{ backgroundColor: "#a73131" }}
            >
              <Text fontWeight="semibold" color={"white"} fontSize="md">
                View All Products
              </Text>
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
