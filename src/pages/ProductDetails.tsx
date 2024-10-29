/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  IconButton,
  Select,
  Container,
} from "@chakra-ui/react";
import axios from "axios";
import { FiHeart } from "react-icons/fi";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { breakpoints } from "../data";
import { StarIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";
import { IDummyProduct } from "../interfaces";
import ProductCard from "../components/ProductCard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

const ProductPage = () => {
  const action = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const [qty, setQty] = useState(1);
  const [user, loading] = useAuthState(auth);
  const [relatedItems, setRelatedItems] = useState<any>();
  const getProductList = async () => {
    if (productId && !isNaN(parseInt(productId))) {
      const response: any = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      const { data } = response;
      return data;
    } else {
      navigate("/404");
    }
  };

  const { data, isLoading } = useQuery("productDetails", () =>
    getProductList()
  );

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=50")
      .then((response) => response.json())
      .then((data) => setRelatedItems(data.products));
  }, []);
  const handleAddCart = () => {
    if (user && !loading) {
      action(addToCart(data));
      navigate("/cart");
    }
  };
  const handleAddWishlist = () => {
    if (user && !loading) {
      if (!isLoading) {
        action(addToWishlist(data));
      }
    }
  };
  return data ? (
    <Container p="5" maxW={breakpoints} mx="auto">
      {/* Breadcrumb Navigation */}
      <Text fontSize="sm" color="gray.500">
        Account / Gaming / Havic HV G-92 Gamepad
      </Text>

      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr 1fr 1fr 1fr" }}
        gap="8"
        mt="5"
      >
        {/* Left - Image Gallery */}
        <Stack
          spacing="10"
          direction={"row-reverse"}
          alignItems={"center"}
          justifyContent={"center"}
          gridColumn={{ md: "1 / 4" }}
        >
          <Box
            border={"1px"}
            borderColor={"gray.300"}
            borderRadius="md"
            w={"50%"}
          >
            <Image
              src={data && data.thumbnail}
              alt="Main Product"
              borderRadius="md"
              boxSize="full"
            />
          </Box>
          <Flex direction="column" gap="3">
            {data &&
              data.images.map((src: string, idx: number) => (
                <Image
                  key={idx}
                  src={src}
                  alt={`Thumbnail ${idx + 1}`}
                  boxSize="100px"
                  border={"1px"}
                  borderColor={"gray.300"}
                  borderRadius="md"
                  cursor="pointer"
                  _hover={{ border: "2px solid", borderColor: "red.500" }}
                />
              ))}
          </Flex>
        </Stack>

        {/* Right - Product Info */}
        <Stack spacing="4" gridColumn={{ md: "4 / 6" }}>
          {/* Product Title and Price */}
          <Heading as="h2" size="lg">
            {data.title}
          </Heading>
          <Flex alignItems="center" gap={2}>
            <Box>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < data.rating ? "yellow.500" : "gray.300"}
                  />
                ))}
            </Box>
            <Text color="gray.500" fontSize="sm">
              ({data.reviews.length} Reviews)
            </Text>
            <Text color="green.500" fontSize="sm">
              {data.availabilityStatus}
            </Text>
          </Flex>

          <Text fontSize="2xl" fontWeight="bold">
            ${data.price}
          </Text>
          <Text color="gray.600">{data.description}</Text>

          {/* Colors */}
          <Flex alignItems="center">
            <Text mr="4">Colours:</Text>
            <Box
              w="6"
              h="6"
              bg="gray.700"
              borderRadius="full"
              cursor="pointer"
              me={"2"}
            />
            <Box
              w="6"
              h="6"
              bg="red.500"
              borderRadius="full"
              cursor="pointer"
            />
          </Flex>

          {/* Size & Quantity */}
          <Flex gap="4" alignItems="center">
            <Select placeholder="Size" w="24">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>
          </Flex>

          {/* Action Buttons */}
          <Flex gap="4" alignItems="center">
            <Flex alignItems="center" gap={1}>
              <Button size="md" onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>
                -
              </Button>
              <Text mx="2">{qty}</Text>
              <Button
                size="md"
                colorScheme="red"
                onClick={() => setQty(qty + 1)}
              >
                +
              </Button>
            </Flex>
            <Button colorScheme="red" size="md" onClick={handleAddCart}>
              Buy Now
            </Button>
            <IconButton
              aria-label="Add to Wishlist"
              icon={<FiHeart />}
              variant="outline"
              colorScheme="red"
              onClick={handleAddWishlist}
            />
          </Flex>

          {/* Info Boxes */}
          <Box
            mt="4"
            p="4"
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
          >
            <Text>Free Delivery</Text>
            <Text color="gray.500" fontSize="sm">
              Enter your postal code for Delivery Availability
            </Text>
          </Box>
          <Box
            mt="4"
            p="4"
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
          >
            <Text>Return Delivery</Text>
            <Text color="gray.500" fontSize="sm">
              Free 30 Days Delivery Returns
            </Text>
          </Box>
        </Stack>
      </Grid>

      {/* Related Items */}
      <Box mt="10">
        <Heading size="md" mb="5">
          Related Item
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="6">
          {relatedItems &&
            relatedItems
              .filter(
                (relatedItem: IDummyProduct) =>
                  relatedItem.category === data.category &&
                  relatedItem.id !== data.id
              )
              .map(
                (product: IDummyProduct, idx: number) =>
                  idx < 4 && <ProductCard product={product} wishlist={false} />
              )}
        </Grid>
      </Box>
    </Container>
  ) : (
    <div>loading</div>
  );
};
export default ProductPage;
