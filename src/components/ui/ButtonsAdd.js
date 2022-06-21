import Swal from "sweetalert2";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";
import { addHeroe, addVillan } from "../../store/reducers/teamsSlice";

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

const ButtonsAdd = React.memo(({ character }) => {
  const dispatch = useDispatch();
  const { heroes, villans } = useSelector((state) => state.Teams);

  const handleAddHeroe = (heroe) => {
    if (heroes.length < 3) {
      if (heroes.find((h) => h.id === heroe.id)) {
        ErrorMessageExists("Heroes");
      } else {
        dispatch(addHeroe({ heroe }));

        const newObj = [...heroes, heroe];

        localStorage.setItem("heroesAlkemy", JSON.stringify(newObj));

        addSucces("Heroes");
      }
    } else {
      ErrorMessage("Heroes");
    }
  };

  const handleAddVillan = (villan) => {
    if (villans.length < 3) {
      if (villans.find((h) => h.id === villan.id)) {
        ErrorMessageExists("Villanos");
      } else {
        dispatch(addVillan({ villan }));

        const newObj = [...villans, villan];

        localStorage.setItem("villansAlkemy", JSON.stringify(newObj));

        addSucces("Villanos");
      }
    } else {
      ErrorMessage("Villanos");
    }
  };

  return (
    <>
      {character.biography.alignment === "good" ? (
        <Button colorScheme="blue" onClick={() => handleAddHeroe(character)}>
          Add Team Heroes
        </Button>
      ) : (
        <Button colorScheme="red" onClick={() => handleAddVillan(character)}>
          Add Team Villans
        </Button>
      )}
    </>
  );
});

export default ButtonsAdd;
