import { Grid, GridItem, Container } from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";

import useHeroes from "../../hooks/useHeroes";

import Spinner from "../ui/Spinner";
import ColHeroeCard from "./ColHeroeCard";

const HeroesScreen = () => {
  const { loading, heroes, error, searchHeroe } = useHeroes();

  return (
    <div className="container">
      <div className="row place-content-center">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Formik
              initialValues={{
                search: "",
              }}
              validate={(values) => {
                const errors = {};

                if (!values.search) {
                  errors.search = "Required";
                } else if (!isNaN(values.search)) {
                  errors.search = "Search is a number";
                }

                return errors;
              }}
              onSubmit={(values) => {
                searchHeroe(values.search.toLowerCase());
                values.search = "";
              }}
            >
              {({ errors }) => (
                <Form className="form-search mb-4">
                  <Field
                    id="search"
                    name="search"
                    placeholder="Search"
                    className={errors.search ? "error-input" : ""}
                  />
                  <button type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </Form>
              )}
            </Formik>
            <Grid
              templateColumns={{
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              justifyContent={"center"}
            >
              {heroes.map((heroe) => {
                return (
                  <GridItem
                    key={heroe.id}
                    display="flex"
                    justifyContent={"center"}
                  >
                    <ColHeroeCard heroe={heroe} actionDelete={false} />
                  </GridItem>
                );
              })}
            </Grid>
            {error && (
              <div className="alert alert-danger" role="alert">
                El heroe no existe
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HeroesScreen;
