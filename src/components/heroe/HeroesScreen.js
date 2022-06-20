import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { startGetAllCharacters } from "../../store/reducers/charactersSlice";
import { AnimatePresence } from "framer-motion";

import Spinner from "../ui/Spinner";
import ColHeroeCard from "./ColHeroeCard";

const HeroesScreen = () => {
  const dispatch = useDispatch();
  const { Characters } = useSelector((state) => state);

  useEffect(() => {
    if (
      Characters.status !== "completed" ||
      Characters.visibleCharacters.length < 10
    )
      dispatch(startGetAllCharacters());
  }, [dispatch]);

  return (
    <div className="container">
      <Container maxW="1400px" padding={"16px"}>
        {Characters.status === "pending" ? (
          <Spinner />
        ) : (
          <>
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)",
              }}
              justifyContent={"center"}
            >
              {Characters.visibleCharacters.length === 0 && (
                <Text
                  as="h2"
                  fontSize="5xl"
                  color="red.500"
                  gridColumn={"span 2"}
                >
                  Characters not found
                </Text>
              )}
              <AnimatePresence>
                {Characters.visibleCharacters.map((character) => {
                  return (
                    <GridItem
                      key={character.id}
                      display="flex"
                      justifyContent={"center"}
                    >
                      <ColHeroeCard
                        character={character}
                        actionDelete={false}
                      />
                    </GridItem>
                  );
                })}
              </AnimatePresence>
            </Grid>
            {Characters.error && (
              <div className="alert alert-danger" role="alert">
                {Characters.error}
              </div>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default HeroesScreen;
