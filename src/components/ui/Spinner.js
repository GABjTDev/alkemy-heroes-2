import { Stack } from "@chakra-ui/react";

const Spinner = () => {
  return (
    <Stack
      w={"100%"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Stack>
  );
};

export default Spinner;
