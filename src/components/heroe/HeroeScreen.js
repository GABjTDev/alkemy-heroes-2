import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getHeroe } from "../../helpers/getHeroe";
import Progress from "../ui/Progress";
import Spinner from "../ui/Spinner";

import ButtonsAdd from "../ui/ButtonsAdd";
import { Container, Box, Stack, VStack, Text } from "@chakra-ui/react";

const initialState = {
  heroe: {},
  loading: true,
};

const HeroeScreen = () => {
  const { id } = useParams();
  const [heroe, setHeroe] = useState(initialState);

  const { name, biography, image, powerstats, appearance, work } = heroe.heroe;

  useEffect(() => {
    const dataHeroe = async () => {
      const heroe = await getHeroe(id);

      setHeroe({
        heroe,
        loading: false,
      });
    };

    dataHeroe();
  }, [id]);

  return (
    <Container maxW="container.xl">
      {heroe.loading ? (
        <Spinner />
      ) : (
        <>
          <Box>
            <Text as="h1" fontSize="4xl">
              {name}
            </Text>
            <Stack flexDirection={["column", "column", "row"]} mb={"20px"}>
              <Box marginRight={"20px"}>
                <img src={image.url} alt={`Foto de ${name}`} />
              </Box>
              <VStack spacing={4} alignItems={"flex-start"}>
                <Text as="h2" fontSize="3xl">
                  Biography
                </Text>
                <p>
                  Full-name: <b>{biography["full-name"]}</b>
                </p>
                <p>
                  Aliases: <b>{biography["aliases"]}</b>
                </p>
                <p>
                  First-appearance: <b>{biography["first-appearance"]}</b>
                </p>
                <p>
                  Publisher: <b>{biography["publisher"]}</b>
                </p>
                <p>
                  Alignment: <b>{biography["alignment"]}</b>
                </p>
                <p>
                  Height: <b>{appearance["height"][1]}</b>
                </p>
                <p>
                  Weight: <b>{appearance["weight"][1]}</b>
                </p>
                <p>
                  Eye Color: <b>{appearance["eye-color"]}</b>
                </p>
                <p>
                  Hair Color: <b>{appearance["hair-color"]}</b>
                </p>
                <p>
                  Work: <b>{work["occupation"]}</b>
                </p>
                <ButtonsAdd {...heroe.heroe} />
              </VStack>
            </Stack>
          </Box>
          <Text as="h2" fontSize="3xl">
            Stats:
          </Text>
          <Progress powerstats={powerstats} rol={biography["alignment"]} />
        </>
      )}
    </Container>
  );
};

export default HeroeScreen;
