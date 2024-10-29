import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Image,
  Input,
  InputGroup,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../features/cart/cartSlice";
import { breakpoints } from "../data";

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const { cartProducts } = useSelector(selectCart);

  const total = cartProducts.reduce(
    (total, current) => total + current.total,
    0
  );

  const inputDetails = [
    { label: "First Name*", name: "name" },
    { label: "Company Name", name: "company" },
    { label: "Street Address*", name: "street" },
    { label: "Apartment, floor, etc. (optional)", name: "apartment" },
    { label: "Town/City*", name: "city" },
    { label: "Phone Number*", name: "phone" },
    { label: "Email Address", name: "email" },
  ];
  return (
    <Container py={8} maxW={breakpoints} mx="auto">
      {/* Breadcrumb */}
      <Text fontSize="sm" mb={4}>
        Account / My Account / Product / View Cart / <b>CheckOut</b>
      </Text>

      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={"80px"}>
        {/* Left - Billing Details */}
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Billing Details
          </Text>
          <Stack spacing={4}>
            {inputDetails.map((input) => (
              <FormControl id={input.name}>
                <FormLabel color={"gray.400"}>{input.label}</FormLabel>
                <InputGroup>
                  <Input type="text" size="md" bg={"gray.100"} />
                </InputGroup>
              </FormControl>
            ))}
          </Stack>
          <Checkbox mt={4} defaultChecked>
            Save this information for faster check-out next time
          </Checkbox>
        </Box>

        {/* Right - Order Summary & Payment */}
        <Box p={6} borderRadius="md">
          {/* Order Summary */}
          <VStack align="start" spacing={4}>
            <Text fontSize="lg" fontWeight="bold">
              Your Order
            </Text>

            {cartProducts &&
              cartProducts.map((product) => (
                <HStack w="100%" justify="space-between">
                  <Image
                    boxSize="50px"
                    src={product.thumbnail} // LCD Monitor Image
                    alt="product image"
                  />
                  <Text>{product.title}</Text>
                  <Text>{product.price}</Text>
                </HStack>
              ))}

            <HStack w="100%" justify="space-between">
              <Text>Subtotal:</Text>
              {cartProducts.length > 0 && (
                <Text textAlign={"end"}>{total.toFixed(2)}</Text>
              )}
            </HStack>
            <Divider h={"1px"} bg={"blackAlpha.500"} />

            <HStack w="100%" justify="space-between">
              <Text>Shipping:</Text>
              <Text>Free</Text>
            </HStack>
            <Divider h={"1px"} bg={"blackAlpha.500"} />
            <HStack w="100%" justify="space-between">
              <Text>Total:</Text>
              {cartProducts.length > 0 && (
                <Text textAlign={"end"}>{total.toFixed(2)}</Text>
              )}
            </HStack>
          </VStack>

          {/* Payment Methods */}
          <Text fontSize="lg" fontWeight="bold" mt={8}>
            Payment Methods
          </Text>
          <HStack alignItems={"start"} justifyContent={"space-between"}>
            <RadioGroup
              onChange={setPaymentMethod}
              value={paymentMethod}
              mt={4}
            >
              <Stack direction="column">
                <Radio value="bank">Bank</Radio>
                <Radio value="cash">Cash on delivery</Radio>
              </Stack>
            </RadioGroup>

            {/* Payment Logos */}
            <HStack spacing={4} mt={4}>
              <Image src="/bkash.png" alt="Visa" w={"50px"} />
              <Image src="/visa.png" w={"40px"} alt="MasterCard" />
              <Image src="/master.png" w={"40px"} alt="PayPal" />
            </HStack>
          </HStack>

          {/* Coupon Code */}
          <Stack mt={6} direction={{ base: "column", md: "row" }}>
            <Input placeholder="Coupon Code" size={"lg"} />
            <Button
              colorScheme="red"
              size={"lg"}
              fontSize={{ base: "md", lg: "lg" }}
              px={8}
            >
              Apply Coupon
            </Button>
          </Stack>

          {/* Place Order Button */}
          <Button
            colorScheme="red"
            fontSize={{ base: "md", lg: "lg" }}
            size={"lg"}
            w={{ base: "full", md: "40%" }}
            mt={4}
          >
            Place Order
          </Button>
        </Box>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
