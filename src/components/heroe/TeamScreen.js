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
  const { heroes, villans } = useSelector((state) => state.Teams);
  const { Auth } = useSelector((state) => state);
  const [statsHeroes, setStatsHeroes] = useState({});
  const [statsVillans, setStatsVillans] = useState({});

  useEffect(() => {
    localStorage.setItem("tokenAlkemy", JSON.stringify({ token: Auth.token }));
  }, [Auth]);

  useEffect(() => {
    setStatsHeroes(createStats(heroes));
  }, [heroes]);

  useEffect(() => {
    setStatsVillans(createStats(villans));
  }, [villans]);

  return (
    <Container as={"main"} width={"100%"} maxW={"100%"} fontWeight={"bold"}>
      <Stack
        flexDirection={{ sm: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
      >
        {heroes.length >= 1 ? (
          <Team
            title="Heroes"
            teams={heroes}
            stats={statsHeroes}
            color={"blue.400"}
          />
        ) : (
          <Text
            as="h2"
            fontSize="3xl"
            color={"blue.400"}
            textAlign="center"
            flexGrow={1}
          >
            Heroes empty
          </Text>
        )}

        <Box w={"100vw"} maxW={"100px"}>
          <Image src={VS} alt="img Versus" />
        </Box>

        {villans.length >= 1 ? (
          <Team
            title="Villans"
            teams={villans}
            stats={statsVillans}
            color={"red.400"}
          />
        ) : (
          <Text
            as="h2"
            fontSize="3xl"
            color={"red.400"}
            textAlign="center"
            flexGrow={1}
          >
            Villans empty
          </Text>
        )}
      </Stack>
    </Container>
  );
};

export default TeamScreen;
