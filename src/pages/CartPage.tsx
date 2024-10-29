import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  SimpleGrid,
  Text,
  Image,
  VStack,
  GridItem,
  Stack,
} from "@chakra-ui/react";
import { breakpoints } from "../data";
import { useDispatch, useSelector } from "react-redux";
import {
  modifyQuantity,
  removeFromCart,
  selectCart,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
const CartPage = () => {
  const { cartProducts } = useSelector(selectCart);
  const cartAction = useDispatch();

  const total = cartProducts.reduce(
    (total, current) => total + current.total,
    0
  );
  return (
    <Box p={8} maxW={breakpoints} mx="auto">
      {/* Breadcrumb */}
      <Flex gap={2} mb={"50px"}>
        <Text fontSize="sm">Home</Text>/
        <Text fontSize="sm" fontWeight={"medium"}>
          Cart
        </Text>
      </Flex>

      {/* Cart Items */}
      <SimpleGrid
        columns={4}
        spacing={10}
        boxShadow={"md"}
        py={4}
        px={6}
        mb={8}
        rounded={"md"}
        display={{ base: "none", md: "grid" }}
      >
        <Text fontWeight="bold">Product</Text>
        <Text fontWeight="bold">Price</Text>
        <Text fontWeight="bold">Quantity</Text>
        <Text fontWeight="bold">Subtotal</Text>
      </SimpleGrid>

      {/* Items */}

      {cartProducts.map((item) => (
        <SimpleGrid
          columns={{ base: 2, md: 4 }}
          spacing={{ base: 0, md: 10 }}
          boxShadow={"md"}
          py={4}
          px={6}
          mb={4}
          alignItems={"center"}
          rounded={"md"}
          h={{ base: "200px", md: "auto" }}
        >
          <HStack
            gridColumn={{ base: "1 / 2" }}
            gridRow={{ base: "1 / 4", md: "auto" }}
            me={"30px"}
            pos={"relative"}
          >
            <Image
              boxSize="50px"
              src={item.thumbnail} // Replace with product image
              alt="LCD Monitor"
            />
            <VStack align="flex-start">
              <Text fontWeight="bold">{item.title}</Text>
            </VStack>
            <Button
              bg={"red.500"}
              color={"white"}
              position={"absolute"}
              rounded={"full"}
              left={"-10px"}
              top={"-10px"}
              fontSize={"12px"}
              size={"xs"}
              onClick={() => cartAction(removeFromCart(item.id))}
            >
              X
            </Button>
          </HStack>
          <Text
            textAlign={{ base: "end", md: "start" }}
            gridColumn={{ base: "2 / -1", md: "auto" }}
          >
            {item.price}
          </Text>
          <GridItem
            gridColumn={{ base: "2 / -1", md: "auto" }}
            display={"flex"}
            justifyContent={{ base: "flex-end", md: "flex-start" }}
          >
            <NumberInput
              onChange={(_, v) =>
                cartAction(modifyQuantity({ value: v, item: item }))
              }
              value={item.quantity}
              w="70px"
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </GridItem>
          <Text
            textAlign={{ base: "end", md: "start" }}
            gridColumn={{ base: "2 / -1", md: "auto" }}
            fontWeight={"semibold"}
          >
            {item.total.toFixed(2)}
          </Text>
        </SimpleGrid>
      ))}

      {/* Actions */}
      <Flex justify="space-between" mt={8}>
        <Button variant="outline" paddingX={10} paddingY={6}>
          Return To Shop
        </Button>
        <Button variant="outline" paddingX={10} paddingY={6}>
          Update Cart
        </Button>
      </Flex>

      {/* Coupon & Cart Total Section */}
      <Grid
        templateColumns={{ lg: "450px 550px", base: "1fr 1fr" }}
        alignItems={"start"}
        justifyContent={"space-between"}
        mt={12}
      >
        {/* Coupon Code */}
        <Stack
          direction={{ base: "column", md: "row" }}
          gridColumn={{ base: "1 / 3", lg: "1 / 2" }}
          mb={{ base: 8, md: 0 }}
        >
          <Input paddingY={6} placeholder="Coupon Code" />
          <Button colorScheme="red" paddingX={16} paddingY={6}>
            Apply Coupon
          </Button>
        </Stack>

        {/* Cart Summary */}
        <Box
          border="1px solid"
          p={6}
          borderRadius="md"
          gridColumn={{ base: "1 / 3", lg: "2 / 3" }}
        >
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Cart Total
          </Text>
          <SimpleGrid columns={1} gap={4} mb={4}>
            <Flex
              justifyContent={"space-between"}
              borderBottom={"1px solid #cccccc"}
              pb={4}
            >
              <Text>Subtotal:</Text>
              {cartProducts.length > 0 && (
                <Text textAlign={"end"}>{total.toFixed(2)}</Text>
              )}
            </Flex>
            <Flex
              justifyContent={"space-between"}
              borderBottom={"1px solid #cccccc"}
              pb={4}
            >
              <Text>Shipping:</Text>
              <Text textAlign={"end"}>Free</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text>Total:</Text>
              {cartProducts.length > 0 && (
                <Text textAlign={"end"}>{total.toFixed(2)}</Text>
              )}
            </Flex>
          </SimpleGrid>
          <Flex justifyContent={"center"}>
            <Button
              as={Link}
              to={"/cart/checkout"}
              colorScheme="red"
              w="70%"
              paddingY={6}
              mt={4}
            >
              Proceed to checkout
            </Button>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};

export default CartPage;
