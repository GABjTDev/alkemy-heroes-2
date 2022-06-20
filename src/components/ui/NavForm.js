import React from "react";
import { Formik, Field, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { filterCharacters } from "../../store/reducers/charactersSlice";

const NavForm = () => {
  const { Characters } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        search: "",
      }}
      validate={(values) => {
        const errors = {};

        if (!isNaN(values.search)) {
          errors.search = "Search is a number";
        }

        return errors;
      }}
      onSubmit={(values) => {
        const filter = Characters.allCharacters.filter((character) =>
          character.name.toLowerCase().includes(values.search.toLowerCase())
        );

        values.search = "";
        dispatch(filterCharacters({ filter }));
      }}
    >
      {({ errors }) => (
        <Form className="form-search">
          <Field
            id="search"
            name="search"
            placeholder="Search"
            style={{
              padding: "6px",
              border: "2px solid gray",
              borderRadius: "5px",
              outline: "none",
              width: "100%",
            }}
            autoComplete="off"
          />
          <button type="submit"></button>
        </Form>
      )}
    </Formik>
  );
};

export default NavForm;
