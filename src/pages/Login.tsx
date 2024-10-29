import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { ILoginInput } from "../interfaces";
import { useState } from "react";
import { breakpoints } from "../data";
import InputError from "../components/InputError";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
const Login = () => {
  const toast = useToast();
  const [signInWithEmailAndPassword, user, loading, firebaseError] =
    useSignInWithEmailAndPassword(auth);
  const [res, setRes] = useState<unknown>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInput>();

  const onSubmit: SubmitHandler<ILoginInput> = async (data) => {
    const res = await signInWithEmailAndPassword(
      data.identifier,
      data.password
    );

    setRes(res);
    setTimeout(() => {
      location.replace("/");
    }, 2000);
  };
  if (firebaseError) {
    toast({
      title: "Error",
      description: firebaseError.message,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }

  if (res) {
    setTimeout(() => {
      location.replace("/");
    }, 2000);
  }

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      h={"calc(100vh - 81px)"}
    >
      <Image
        src="../../public/a1c7dc5b68a42239311e510f54d8cd59.jpg"
        w={"55%"}
        display={{ base: "none", lg: "block" }}
      />
      <Container as={Flex} justifyContent={"center"} maxW={breakpoints}>
        <Stack
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 2 }}
          w={{ "2xl": "60%", md: "80%", lg: "100%", xl: "70%", base: "100%" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              "Log in to Exclusive"
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Enter the details below
            </Text>
          </Stack>
          <Box as={"form"} mt={10} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={8} mb={6}>
              <Box>
                <Input
                  placeholder="Email"
                  border={0}
                  rounded={0}
                  borderBottom={"1px solid #bfbfbf"}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  {...register("identifier", {
                    required: true,
                    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  })}
                />
                {errors?.identifier &&
                  errors.identifier.type === "required" && (
                    <InputError msg="Email is required" />
                  )}
                {errors?.identifier && errors.identifier.type === "pattern" && (
                  <InputError msg="Not a valid Email" />
                )}
              </Box>
              <Box>
                <Input
                  type="password"
                  placeholder="Password"
                  border={0}
                  rounded={0}
                  borderBottom={"1px solid #bfbfbf"}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                />
                {errors?.password && errors.password.type === "required" && (
                  <InputError msg="Password is required" />
                )}
                {errors?.password && errors.password.type === "minLength" && (
                  <InputError msg="Password must be at least 6 characters" />
                )}
              </Box>
            </Stack>
            <Flex flexDirection={"row"} gap={4}>
              {
                <Button
                  type="submit"
                  fontFamily={"heading"}
                  bg={"#db4444"}
                  color={"white"}
                  w={"full"}
                  _hover={{ bg: "#b33838" }}
                  h={"50px"}
                  disabled={loading}
                >
                  {loading ? <Spinner /> : "Log In"}
                </Button>
              }

              <Button
                as={"a"}
                cursor={"pointer"}
                type="button"
                fontFamily={"heading"}
                fontSize={"sm"}
                w={"full"}
                bg={"white"}
                color={"#db4444"}
                h={"50px"}
              >
                Forgot password?
              </Button>
            </Flex>
          </Box>
        </Stack>
      </Container>
      {user &&
        toast({
          title: "Logged in successfully.",
          description:
            "You've been logged in, and you'll be redirected to home page",
          status: "success",
          duration: 2000,
          isClosable: true,
        })}
    </Flex>
  );
};

export default Login;
