import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getHeroe } from "../../helpers/getHeroe";
import Progress from "../ui/Progress";
import Spinner from "../ui/Spinner";

import ButtonsAdd from "../ui/ButtonsAdd";
import { Container, Box, Stack, VStack, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const initialState = {
  heroe: {},
  loading: true,
};

const HeroeScreen = () => {
  const { id } = useParams();
  const [heroe, setHeroe] = useState(initialState);

  const { name, biography, images, powerstats, appearance, work } = heroe.heroe;

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
        <motion.div>
          <Text
            as="h1"
            fontSize="4xl"
            textAlign={"center"}
            fontWeight={"bold"}
            marginBottom={"10px"}
          >
            {name}
          </Text>
          <Box
            as={motion.div}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition=".2s linear"
            background={"white"}
            borderRadius={"50px"}
            boxShadow={"0 0 5px rgba(0,0,0,.5)"}
          >
            <Stack flexDirection={["column", "column", "row"]} mb={"30px"}>
              <Box>
                <Image
                  src={images.lg}
                  alt={`Foto de ${name}`}
                  borderLeftRadius={{ md: "50px" }}
                  borderTopRadius={{ sm: "50px" }}
                  borderTopRightRadius={{ md: "0px" }}
                  width={"100%"}
                  height={"100%"}
                  objectFit={"cover"}
                />
              </Box>
              <VStack spacing={4} alignItems={"flex-start"} padding={"40px"}>
                <Text as="h2" fontSize="3xl" fontWeight={"bold"}>
                  Biography
                </Text>
                <p>
                  Full-name: <b>{biography["fullName"]}</b>
                </p>
                <p>
                  Aliases: <b>{biography["aliases"]}</b>
                </p>
                <p>
                  First-appearance: <b>{biography["firstAppearance"]}</b>
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
                  Eye Color: <b>{appearance["eyeColor"]}</b>
                </p>
                <p>
                  Hair Color: <b>{appearance["hairColor"]}</b>
                </p>
                <p>
                  Work: <b>{work["occupation"]}</b>
                </p>
                <ButtonsAdd character={heroe.heroe} />
              </VStack>
            </Stack>
          </Box>
          <Text
            as={motion.h2}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition=".2s linear"
            fontSize="3xl"
            textAlign={"center"}
            fontWeight={"bold"}
          >
            Stats
          </Text>
          <Box
            as={motion.div}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition=".2s linear"
            background={"white"}
            padding={"20px 50px"}
            maxW={"1000px"}
            margin={"0 auto"}
            borderRadius={"50px"}
          >
            <Progress powerstats={powerstats} rol={biography["alignment"]} />
          </Box>
        </motion.div>
      )}
    </Container>
  );
};

export default HeroeScreen;
