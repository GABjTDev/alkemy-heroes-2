import { Box, Progress, Text } from "@chakra-ui/react";

const ProgressBar = ({ title, progress, rol }) => {
  return (
    <Box mb={"10px"}>
      <Text as={"h3"} fontSize="1xl" fontWeight={"bold"}>
        {title} {`${progress}%`}
      </Text>
      <Progress
        value={progress}
        colorScheme={rol === "good" ? "blue" : "red"}
        borderRadius={"5px"}
      />
    </Box>
  );
};

export default ProgressBar;
