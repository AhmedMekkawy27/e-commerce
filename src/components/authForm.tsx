import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  Image,
  Spinner,
} from "@chakra-ui/react";
import { breakpoints } from "../data";
import { IFormInput } from "../interfaces";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import InputError from "./InputError";

interface IProps {
  w: "fit-content" | "full";
  flexDirection: "row" | "column";
  color: "black" | "#db4444";
  register: UseFormRegister<IFormInput>;
  handleSubmit: UseFormHandleSubmit<IFormInput>;
  onsubmit: SubmitHandler<IFormInput>;
  errors: FieldErrors<IFormInput>;
  isLoading: boolean;
  login: boolean;
  title: string;
  btnTitle: string;
}
export default function AuthForm({
  w,
  flexDirection,
  color,
  register,
  handleSubmit,
  onsubmit,
  errors,
  isLoading,
  login,
  title,
  btnTitle,
}: IProps) {
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
              {title}
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Enter the details below
            </Text>
          </Stack>
          <Box as={"form"} mt={10} onSubmit={handleSubmit(onsubmit)}>
            <Stack spacing={8} mb={6}>
              {!login && (
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
              )}
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
            <Flex flexDirection={flexDirection} gap={4}>
              {
                <Button
                  type="submit"
                  fontFamily={"heading"}
                  bg={"#db4444"}
                  color={"white"}
                  w={w}
                  _hover={{ bg: "#b33838" }}
                  h={"50px"}
                  disabled={isLoading}
                >
                  {isLoading ? <Spinner /> : btnTitle}
                </Button>
              }
              {!login && (
                <Button
                  type="button"
                  fontFamily={"heading"}
                  w={w}
                  bg={"white"}
                  color={color}
                  border={"1px solid #bfbfbf"}
                  h={"50px"}
                >
                  Sign Up With Google
                </Button>
              )}
              {login && (
                <Button
                  as={"a"}
                  cursor={"pointer"}
                  type="button"
                  fontFamily={"heading"}
                  fontSize={"sm"}
                  w={w}
                  bg={"white"}
                  color={color}
                  h={"50px"}
                >
                  Forgot password?
                </Button>
              )}
            </Flex>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
}
