import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "../interfaces";
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
import InputError from "../components/InputError";
import { breakpoints } from "../data";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";
const Register = () => {
  const toast = useToast();
  const [res, setRes] = useState<unknown>();
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, firebaseError] =
    useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const res = await createUserWithEmailAndPassword(data.email, data.password);

    setRes(res);
  };
  if (firebaseError) {
    toast({
      title: "Error",
      description: firebaseError.message,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }

  if (res) {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      h={"calc(100vh - 81px)"}
    >
      <Image
        src="/a1c7dc5b68a42239311e510f54d8cd59.jpg"
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
              "Create An Account"
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Enter the details below
            </Text>
          </Stack>
          <Box as={"form"} mt={10} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={8} mb={6}>
              <Box>
                <Input
                  placeholder="Name"
                  border={0}
                  rounded={0}
                  borderBottom={"1px solid #bfbfbf"}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  {...register("username", {
                    required: true,
                    minLength: 5,
                  })}
                />
                {errors?.username && errors.username.type === "required" && (
                  <InputError msg="Username is required" />
                )}
                {errors?.username && errors.username.type === "minLength" && (
                  <InputError msg="Username must be at least 5 characters" />
                )}
              </Box>

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
                  {...register("email", {
                    required: true,
                    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  })}
                />
                {errors?.email && errors.email.type === "required" && (
                  <InputError msg="Email is required" />
                )}
                {errors?.email && errors.email.type === "pattern" && (
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
            <Flex flexDirection={"column"} gap={4}>
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
                  {loading ? <Spinner /> : "Create Account"}
                </Button>
              }
              <Button
                type="button"
                fontFamily={"heading"}
                w={"full"}
                bg={"white"}
                color={"black"}
                border={"1px solid #bfbfbf"}
                h={"50px"}
              >
                Sign Up With Google
              </Button>
            </Flex>
          </Box>
        </Stack>
      </Container>
      {user &&
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 2000,
          isClosable: true,
        })}
    </Flex>
  );
};

export default Register;
