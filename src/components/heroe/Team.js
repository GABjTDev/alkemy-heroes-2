import ColHeroeCard from "./ColHeroeCard";
import { Box, Text, Stack } from "@chakra-ui/react";
import TableStats from "./TableStats";

const Team = ({ title, teams, stats, color }) => {
  return (
    <Box flexGrow={"1"}>
      <Text as="h2" fontSize="3xl" color={color} textAlign="center">
        {title}
      </Text>
      <Stack
        justifyContent={"space-evenly"}
        alignItems={"baseline"}
        flexWrap={"wrap"}
        flexDirection={{ sm: "column", md: "row" }}
        mb={"10px"}
      >
        {teams.map((character) => {
          return (
            <ColHeroeCard
              key={character.id}
              character={character}
              actionDelete={true}
            />
          );
        })}
      </Stack>
      <Box
        borderRadius={"15px"}
        border={"3px solid"}
        borderColor={color}
        maxWidth={"400px"}
        margin={"0 auto"}
      >
        <TableStats stats={stats} title={title} />
      </Box>
    </Box>
  );
};

export default Team;
