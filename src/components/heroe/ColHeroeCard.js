import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { removeHeroe, removeVillan } from "../../actions/teams";
import ButtonsAdd from "../ui/ButtonsAdd";
import { Box, Button, Image, Stack, VStack } from "@chakra-ui/react";

const ColHeroeCard = ({ heroe, actionDelete }) => {
  const dispatch = useDispatch();

  const { id, name, image, biography } = heroe;

  const handleDelete = (id) => {
    Swal.fire({
      title: `Estas seguro de eliminar a ${name} del equipo`,
      showDenyButton: true,
      confirmButtonText: "Eliminar personaje",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        if (biography["alignment"] === "good") {
          dispatch(removeHeroe(id));

          const newObj = JSON.parse(
            localStorage.getItem("heroesAlkemy")
          ).filter((heroe) => heroe.id !== id);
          localStorage.setItem("heroesAlkemy", JSON.stringify(newObj));
        } else {
          dispatch(removeVillan(id));

          const newObj = JSON.parse(
            localStorage.getItem("villansAlkemy")
          ).filter((heroe) => heroe.id !== id);
          localStorage.setItem("villansAlkemy", JSON.stringify(newObj));
        }

        Swal.fire("Eliminado!", "", "success");
      }
    });
  };

  return (
    <Box
      maxW={"250px"}
      height={"580px"}
      p={"10px"}
      className="card"
      display={"flex"}
      flexDirection={"column"}
    >
      <Image
        src={image.url}
        alt={`Imagen de ${name}`}
        width={"100%"}
        objectFit="cover"
        marginBottom={"10px"}
      />

      <VStack height={"100%"} alignItems={"flex-start"}>
        <h5>{name}</h5>
        <p>
          First-appearans: <b>{biography["first-appearance"]}</b>
        </p>
        <p>
          Full-name: <b>{biography["full-name"]}</b>
        </p>
        <p>
          Publisher: <b>{biography["publisher"]}</b>
        </p>
        <Box
          d={"flex"}
          flexGrow={1}
          flexDirection={"row"}
          alignItems={"flex-end"}
          width={"100%"}
          justifyContent={"space-around"}
          flexWrap={"wrap"}
        >
          <Link to={`/heroe/${id}`}>
            <Button colorScheme="blue" variant="outline">
              Ver más
            </Button>
          </Link>

          {!actionDelete ? (
            <ButtonsAdd {...heroe} />
          ) : (
            <Button colorScheme="red" onClick={() => handleDelete(id)}>
              Eliminar
            </Button>
          )}
        </Box>
      </VStack>
    </Box>
  );
};

export default ColHeroeCard;
