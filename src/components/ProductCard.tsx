import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Icon } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { cartProduct, IDummyProduct, wishlistProduct } from "../interfaces";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/wishlist/wishlistSlice";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
const ProductCard = ({
  product,
  wishlist,
}: {
  product: IDummyProduct | wishlistProduct;
  wishlist: boolean;
}) => {
  const action = useDispatch();
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const cartProduct: cartProduct = {
    id: product.id,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
    total: 0,
    quantity: 0,
  };

  const wishlistProduct: wishlistProduct = {
    id: product.id,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
    rating: product.rating,
    reviews: product.reviews,
  };

  const handleAddCart = () => {
    if (!loading) {
      if (user) {
        action(addToCart(cartProduct));
      } else {
        navigate("/login");
      }
    }
  };
  const handleAddWishlist = () => {
    if (!loading) {
      if (user) {
        action(addToWishlist(wishlistProduct));
      } else {
        navigate("/login");
      }
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      className="group"
      mx={2}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      w={"full"}
      maxH={"400px"}
    >
      <Box
        position={"relative"}
        overflow={"hidden"}
        minH={"200px"}
        maxH={"300px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src={product.thumbnail} alt={"Product Image"} maxW={"350px"} />
        {wishlist && (
          <Box
            bg="white"
            as={Button}
            rounded={"full"}
            position="absolute"
            top={5}
            right={"-16"}
            p={"1"}
            _groupHover={{ right: 2 }}
            transition={"0.3s ease"}
            onClick={() => action(removeFromWishlist(product.id))}
          >
            <Icon boxSize={5} as={RiDeleteBin5Line} />
          </Box>
        )}
        {!wishlist && (
          <Box
            bg="white"
            as={Button}
            rounded={"full"}
            position="absolute"
            top={5}
            right={"-16"}
            p={"1"}
            _groupHover={{ right: 2 }}
            transition={"0.3s ease"}
            onClick={handleAddWishlist}
          >
            <Icon boxSize={5} as={FaRegHeart} />
          </Box>
        )}
        {!wishlist && (
          <Box
            bg="white"
            as={Link}
            to={`/products/${product.id}`}
            rounded={"full"}
            position="absolute"
            top={"70"}
            right={"-16"}
            p={"1"}
            boxSize={"39px"}
            _groupHover={{ right: 2 }}
            transition={"0.3s ease"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            _hover={{ bg: "gray.200" }}
          >
            <Icon boxSize={6} as={IoEyeOutline} />
          </Box>
        )}
        <Button
          width={"full"}
          borderRadius={0}
          borderBottomRadius={"md"}
          bg={"black"}
          color={"white"}
          position={"absolute"}
          left={0}
          bottom={-20}
          _groupHover={{ bottom: 0 }}
          transition={"0.3s ease"}
          onClick={handleAddCart}
        >
          Add To Cart
        </Button>
      </Box>
      <Box py="4" display={"flex"} flexWrap={"wrap"}>
        <Box fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
          {product.title}
        </Box>

        <Box
          as="span"
          w={"full"}
          color="red.400"
          fontSize="md"
          fontWeight={"semibold"}
        >
          {product.price}
          <Box
            as="span"
            ml="4"
            color="gray.400"
            textDecor={"line-through"}
            fontSize="md"
          ></Box>
        </Box>

        <Box
          display="flex"
          gap={1}
          mt="2"
          alignItems="center"
          alignSelf={"end"}
        >
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < product.rating ? "yellow.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            ({product.reviews.length})
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
