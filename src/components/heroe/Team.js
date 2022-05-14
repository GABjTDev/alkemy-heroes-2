import ColHeroeCard from "./ColHeroeCard";
import { Box, Text, Stack } from "@chakra-ui/react";

const Team = ({ title, teams, stats }) => {
  return (
    <Box>
      <Text as="h2">{title}</Text>
      <Stack flexDirection={"row"} alignItems={"baseline"} spacing={"1"}>
        {teams.map((character) => {
          return (
            <ColHeroeCard
              key={character.id}
              heroe={character}
              actionDelete={true}
            />
          );
        })}
      </Stack>
      <Box
        borderRadius={"15px"}
        border={"3px solid"}
        borderColor={"blue.500"}
        padding={"10px"}
      >
        <h2>Stats Total {title}</h2>
        <p>
          Combat: <b>{stats.combat}</b>
        </p>
        <p>
          Durability: <b>{stats.durability}</b>
        </p>
        <p>
          Intelligence: <b>{stats.intelligence}</b>
        </p>
        <p>
          Power: <b>{stats.power}</b>
        </p>
        <p>
          Speed: <b>{stats.speed}</b>
        </p>
        <p>
          Strength: <b>{stats.strength}</b>
        </p>
        <p>
          Height: <b>{stats.height}</b>
        </p>
        <p>
          Weight: <b>{stats.weight}</b>
        </p>
      </Box>
    </Box>
  );
};

export default Team;
