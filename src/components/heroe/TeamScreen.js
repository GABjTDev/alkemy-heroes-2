import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Team from "./Team";
import { Container, Text, Stack, Image, Box } from "@chakra-ui/react";

import VS from "../../styles/assets/vs.svg";

const updateStats = (stats) => {
  return stats.reduce((previousValue, currentValue) => {
    return {
      intelligence:
        Number(previousValue.intelligence) + Number(currentValue.intelligence),
      strength: Number(previousValue.strength) + Number(currentValue.strength),
      speed: Number(previousValue.speed) + Number(currentValue.speed),
      durability:
        Number(previousValue.durability) + Number(currentValue.durability),
      power: Number(previousValue.power) + Number(currentValue.power),
      combat: Number(previousValue.combat) + Number(currentValue.combat),
      height:
        Number(previousValue.height.split(" ")[0]) +
        Number(currentValue.height.split(" ")[0]) +
        " cm",
      weight:
        Number(previousValue.weight.split(" ")[0]) +
        Number(currentValue.weight.split(" ")[0]) +
        " kg",
    };
  });
};

const createStats = (team) => {
  if (team.length >= 1) {
    const arrStats = [];

    team.forEach((pj) => {
      const newObj = {
        ...pj.powerstats,
        height: pj.appearance.height[1],
        weight: pj.appearance.weight[1],
      };

      arrStats.push(newObj);
    });

    const newStats = updateStats(arrStats);
    return newStats;
  }

  return {};
};

const TeamScreen = () => {
  const { heroesTeam, villansTeam } = useSelector((state) => state.teams);
  const [statsHeroes, setStatsHeroes] = useState({});
  const [statsVillans, setStatsVillans] = useState({});

  useEffect(() => {
    setStatsHeroes(createStats(heroesTeam));
  }, [heroesTeam]);

  useEffect(() => {
    setStatsVillans(createStats(villansTeam));
  }, [villansTeam]);

  //   background: #536976;  /* fallback for old browsers */
  // background: -webkit-linear-gradient(to right, #292E49, #536976);  /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to right, #292E49, #536976); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  return (
    <Container as={"main"} maxW={"100%"} fontWeight={"bold"} height={"100vh"}>
      <Text as={"h1"} fontSize={"4xl"}>
        Teams Heroes/Villans
      </Text>
      <Stack
        flexDirection={{ sm: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {heroesTeam.length >= 1 ? (
          <Team title="Heroes" teams={heroesTeam} stats={statsHeroes} />
        ) : (
          <Text>Heroes empty</Text>
        )}

        <Box w={"100vw"} maxW={"100px"}>
          <Image src={VS} alt="img Versus" />
        </Box>

        {villansTeam.length >= 1 ? (
          <Team title="Villans" teams={villansTeam} stats={statsVillans} />
        ) : (
          <Text>Villans empty</Text>
        )}
      </Stack>
    </Container>
  );
};

export default TeamScreen;
