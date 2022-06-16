import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import ButtonsAdd from "../ui/ButtonsAdd";
import { Box, Button, Image, VStack } from "@chakra-ui/react";
import { deleteHeroe, deleteVillan } from "../../store/reducers/teamsSlice";

const ColHeroeCard = ({ character, actionDelete }) => {
  const dispatch = useDispatch();

  const { id, name, images, biography } = character;

  const handleDelete = (id) => {
    Swal.fire({
      title: `Estas seguro de eliminar a ${name} del equipo`,
      showDenyButton: true,
      confirmButtonText: "Eliminar personaje",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        if (biography["alignment"] === "good") {
          const newObj = JSON.parse(
            localStorage.getItem("heroesAlkemy")
          ).filter((heroe) => heroe.id !== id);

          dispatch(deleteHeroe({ heroes: newObj }));

          localStorage.setItem("heroesAlkemy", JSON.stringify(newObj));
        } else {
          const newObj = JSON.parse(
            localStorage.getItem("villansAlkemy")
          ).filter((heroe) => heroe.id !== id);

          dispatch(deleteVillan({ villans: newObj }));
          localStorage.setItem("villansAlkemy", JSON.stringify(newObj));
        }

        Swal.fire("Eliminado!", "", "success");
      }
    });
  };

  return (
    <Box
      maxW={"250px"}
      height={"440px"}
      className="card"
      display={"flex"}
      flexDirection={"column"}
      background={"white"}
      marginBottom={"20px"}
      boxShadow={"0 0 15px rgba(0,0,0,.2)"}
      borderRadius={"10px"}
    >
      <Image
        src={images.md}
        alt={`Imagen de ${name}`}
        width={"100%"}
        objectFit="cover"
        marginBottom={"10px"}
        borderTopLeftRadius={"10px"}
        borderTopRightRadius={"10px"}
        height={"250px"}
      />

      <VStack height={"100%"} alignItems={"center"} p={"16px"}>
        <h5
          style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#414141" }}
        >
          {name}
        </h5>
        <Box
          d={"flex"}
          flexGrow={1}
          flexDirection={"row"}
          alignItems={"flex-end"}
          width={"100%"}
          justifyContent={"space-around"}
          flexWrap={"wrap"}
        >
          <Link to={`/character/${id}`}>
            <Button colorScheme="blue" variant="outline" m={"5px"}>
              Ver más
            </Button>
          </Link>

          {!actionDelete ? (
            <ButtonsAdd character={character} />
          ) : (
            <Button
              colorScheme="red"
              onClick={() => handleDelete(id)}
              m={"5px"}
            >
              Eliminar
            </Button>
          )}
        </Box>
      </VStack>
    </Box>
  );
};

export default ColHeroeCard;
