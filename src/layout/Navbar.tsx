import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Stack,
  Container,
  Input,
  FormControl,
  InputGroup,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { breakpoints } from "../data";
import { BsCart3 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../features/cart/cartSlice";
import { selectWishlist } from "../features/wishlist/wishlistSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
const Links = [
  { title: "Home", navPath: "/" },
  { title: "Contact", navPath: "/contact" },
  { title: "About", navPath: "/about" },
  { title: "Sign Up", navPath: "/register" },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartProducts } = useSelector(selectCart);
  const { wishlistProducts } = useSelector(selectWishlist);
  const [user, loading] = useAuthState(auth);
  return (
    <>
      <Box pt={4} borderBottom={"1px solid #d9d9d9"} pos={"relative"}>
        <Container
          as={Flex}
          maxW={breakpoints}
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={{ lg: "50px", xl: "230px" }} alignItems={"center"}>
            <Box fontWeight={"bold"} fontSize={"larger"}>
              Execlusive
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", lg: "flex" }}
            >
              {Links.map((link) => (
                <Button
                  bg={"white"}
                  as={NavLink}
                  to={link.navPath}
                  key={link.title}
                  _active={{ bg: "#E2E8F0" }}
                >
                  <Text fontWeight={"medium"}>{link.title}</Text>
                </Button>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap={5}>
            <Flex display={"flex"} alignItems={"center"} gap={"3"}>
              <FormControl id="search" display={{ base: "none", lg: "block" }}>
                <InputGroup borderColor="#E0E1E7">
                  <Input
                    type="text"
                    w={"300px"}
                    placeholder="What Are You Looking For?"
                  />
                  <Button bg={"none"} ms={"-12"}>
                    <SearchIcon color="gray.800" />
                  </Button>
                </InputGroup>
              </FormControl>
              {!loading && user && (
                <Button bg={"none"} pos={"relative"} as={Link} to={"/wishlist"}>
                  <FaRegHeart size={"25"} />
                  {wishlistProducts.length > 0 && (
                    <Flex
                      position={"absolute"}
                      right={0}
                      top={0}
                      rounded={"full"}
                      bgColor={"#db4444"}
                      color={"white"}
                      boxSize={"18px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Text fontSize={"10px"}>{wishlistProducts.length}</Text>
                    </Flex>
                  )}
                </Button>
              )}
              {!loading && user && (
                <Button
                  as={Link}
                  to={"/cart"}
                  bg={"none"}
                  position={"relative"}
                >
                  <Icon as={BsCart3} boxSize={"6"} />
                  {cartProducts.length > 0 && (
                    <Flex
                      position={"absolute"}
                      right={0}
                      top={0}
                      rounded={"full"}
                      bgColor={"#db4444"}
                      color={"white"}
                      boxSize={"18px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Text fontSize={"10px"}>{cartProducts.length}</Text>
                    </Flex>
                  )}
                </Button>
              )}
            </Flex>
            <Menu>
              {!loading && user ? (
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
              ) : (
                !loading && (
                  <Button as={Link} to={"/login"}>
                    Log in
                  </Button>
                )
              )}
              <MenuList
                alignItems={"center"}
                bg={"rgba(0,0,0,0.5)"}
                backdropFilter="blur(50px)"
                border={"0"}
                p={"0"}
              >
                <MenuItem
                  as={Link}
                  to={"/profile"}
                  bg={"rgba(0,0,0,0.05)"}
                  _hover={{ bg: "gray.700" }}
                  color={"#fafafa"}
                >
                  Manage My Account
                </MenuItem>
                <MenuItem
                  bg={"rgba(0,0,0,0.05)"}
                  _hover={{ bg: "gray.700" }}
                  color={"#fafafa"}
                >
                  My Order
                </MenuItem>
                <MenuItem
                  bg={"rgba(0,0,0,0.05)"}
                  _hover={{ bg: "gray.700" }}
                  color={"#fafafa"}
                >
                  My Cancellations
                </MenuItem>
                <MenuItem
                  bg={"rgba(0,0,0,0.05)"}
                  _hover={{ bg: "gray.700" }}
                  color={"#fafafa"}
                >
                  My Reviews
                </MenuItem>
                <MenuItem
                  bg={"rgba(0,0,0,0.05)"}
                  _hover={{ bg: "gray.700" }}
                  color={"#fafafa"}
                  onClick={() => {
                    signOut(auth);
                  }}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Container>
      </Box>
      {isOpen ? (
        <Box
          pb={4}
          as={Container}
          maxW={breakpoints}
          display={{ lg: "none" }}
          bg={"white"}
        >
          <Stack as={"nav"} spacing={4}>
            <InputGroup borderColor="#E0E1E7">
              <Input
                type="text"
                w={"full"}
                placeholder="What Are You Looking For?"
              />
              <Button bg={"none"} ms={"-12"}>
                <SearchIcon color="gray.800" />
              </Button>
            </InputGroup>
            {Links.map((link) => (
              <Button as={Link} to={link.navPath} key={link.title}>
                {link.title}
              </Button>
            ))}
          </Stack>
        </Box>
      ) : null}
    </>
  );
};
export default Navbar;
