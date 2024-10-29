import { Box } from "@chakra-ui/react";

interface IProps {
  msg: string;
}
const InputError = ({ msg }: IProps) => {
  return msg ? (
    <Box color={"red.700"} fontWeight={"semibold"} fontSize={"sm"}>
      {msg}
    </Box>
  ) : null;
};

export default InputError;
