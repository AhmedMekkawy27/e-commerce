/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { breakpoints } from "../data";
import { selectWishlist } from "../features/wishlist/wishlistSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useQuery } from "react-query";
import { IDummyProduct } from "../interfaces";

const Wishlist = () => {
  const { wishlistProducts } = useSelector(selectWishlist);
  const getProductList = async () => {
    const data: any = await axios.get("https://dummyjson.com/products?skip=5");
    const filteredData: IDummyProduct[] = data?.data?.products?.filter(
      (product: IDummyProduct) => {
        if (wishlistProducts.length > 0) {
          const exists = wishlistProducts.find(
            (item) => item.id === product.id
          );

          return !exists;
        } else {
          return product;
        }
      }
    );
    return filteredData;
  };

  const { isLoading, data } = useQuery("products", () => getProductList());
  return (
    <Box>
      <Container maxW={breakpoints} py={"60px"}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"50px"}
        >
          <Text>Wishlist ({wishlistProducts.length})</Text>
          <Button variant={"outline"}>Move All To Bag</Button>
        </Stack>
        <Flex
          flexWrap={`${wishlistProducts.length > 3 ? "wrap" : "nowrap"}`}
          justifyContent={"center"}
          rowGap={4}
        >
          {wishlistProducts.map((product) => (
            <Box
              key={product.id}
              display={"flex"}
              justifyContent={"center"}
              minW={"300px"}
              maxW={"310px"}
            >
              <ProductCard product={product} wishlist />
            </Box>
          ))}
        </Flex>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          my={"50px"}
        >
          <Flex gap={"10px"} alignItems={"center"}>
            <Box w={"20px"} h={"40px"} background={"#db4444"} rounded={"md"} />
            <Text fontSize="xl" fontWeight="medium">
              Just For You
            </Text>
          </Flex>
          <Button as={Link} to={"/products"} variant={"outline"}>
            See All
          </Button>
        </Stack>
        <Flex
          flexWrap={`${wishlistProducts.length > 3 ? "wrap" : "nowrap"}`}
          justifyContent={"center"}
          rowGap={4}
        >
          {data &&
            data.length > 0 &&
            !isLoading &&
            data.map(
              (product: any, idx: number) =>
                idx < 4 && (
                  <Box
                    key={product.id}
                    display={"flex"}
                    justifyContent={"center"}
                    minW={"300px"}
                    maxW={"310px"}
                  >
                    <ProductCard product={product} wishlist={false} />
                  </Box>
                )
            )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Wishlist;
