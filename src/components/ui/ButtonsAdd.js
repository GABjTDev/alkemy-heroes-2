import Swal from "sweetalert2";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHeroe, addVillan } from "../../actions/teams";
import { Button } from "@chakra-ui/react";

const ErrorMessage = (team) => {
  Swal.fire({
    icon: "error",
    title: `El equipo esta lleno`,
    text: `El equipo de los ${team} esta completo`,
  });
};

const ErrorMessageExists = (team) => {
  Swal.fire({
    icon: "error",
    title: `El personaje ya esta en el equipo`,
    text: `Este personaje ya esta agregado el team de los ${team}`,
  });
};

const addSucces = (team) => {
  Swal.fire(
    `Agregaste perfectamente al personaje en el equipo de los ${team}`,
    "",
    "success"
  );
};

const ButtonsAdd = React.memo(
  ({ id, name, image, powerstats, biography, appearance }) => {
    const dispatch = useDispatch();
    const { heroesTeam, villansTeam } = useSelector((state) => state.teams);

    const handleAddHeroe = (heroe) => {
      if (heroesTeam.length < 3) {
        if (heroesTeam.find((h) => h.id === id)) {
          ErrorMessageExists("Heroes");
        } else {
          dispatch(addHeroe(heroe));

          const newObj = [...heroesTeam, heroe];

          localStorage.setItem("heroesAlkemy", JSON.stringify(newObj));

          addSucces("Heroes");
        }
      } else {
        ErrorMessage("Heroes");
      }
    };

    const handleAddVillan = (villan) => {
      if (villansTeam.length < 3) {
        if (villansTeam.find((h) => h.id === id)) {
          ErrorMessageExists("Villanos");
        } else {
          dispatch(addVillan(villan));

          const newObj = [...villansTeam, villan];

          localStorage.setItem("villansAlkemy", JSON.stringify(newObj));

          addSucces("Villanos");
        }
      } else {
        ErrorMessage("Villanos");
      }
    };

    return (
      <>
        {biography.alignment === "good" ? (
          <Button
            colorScheme="blue"
            onClick={() =>
              handleAddHeroe({
                id,
                name,
                image,
                powerstats,
                biography,
                appearance,
              })
            }
          >
            Agregar Team Heroes
          </Button>
        ) : (
          <Button
            colorScheme="red"
            onClick={() =>
              handleAddVillan({
                id,
                name,
                image,
                powerstats,
                biography,
                appearance,
              })
            }
          >
            Agregar Team Villanos
          </Button>
        )}
      </>
    );
  }
);

export default ButtonsAdd;
