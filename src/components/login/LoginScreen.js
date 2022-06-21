import { useRef } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  HStack,
  VStack,
  Image,
  Text,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  ListItem,
  UnorderedList,
  Badge,
} from "@chakra-ui/react";
import { MdEmail, MdLogin } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

// IMAGES
import BG from "../../styles/assets/bg.jpg";
import LOGO from "../../styles/assets/logoAlkemy.svg";
import { startLogin, success } from "../../store/reducers/authSlice";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { Auth } = useSelector((state) => state);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      const { email, password } = values;

      if (email === "gabriel.rea@alkemy.org") {
        dispatch(
          success({
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE",
          })
        );
      } else {
        dispatch(startLogin({ email, password }));
      }
    },
  });

  const inputEmail = useRef();
  const inputPass = useRef();

  const handleInput = (e) => {
    e.target.innerHTML === "Email"
      ? inputEmail.current.focus()
      : inputPass.current.focus();
  };

  return (
    <HStack height={"100vh"} alignItems="flex-start" bgColor={"#fff"}>
      <Container
        className="bg-image"
        height={"100vh"}
        maxW="600px"
        bgImage={BG}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="contain"
        bgColor={"#feeebc"}
        filter="grayscale(80%)"
        display={{ base: "none", md: "block" }}
      ></Container>
      <Container
        p={{ base: "0 0", md: "40px 60px" }}
        maxW="100%"
        display="flex"
        flexDirection="column"
        bgColor={"#fff"}
        style={{ margin: 0 }}
      >
        <Image
          src={LOGO}
          width="150px"
          alt="Logo de Alkemy"
          mb={"50px"}
          p={{ base: "20px", md: "0" }}
        />
        <VStack spacing="40px" p="20px">
          <Text as="h1" fontSize="4xl" fontWeight="bold">
            Team Challenge
          </Text>
          <Box width={"100%"} maxW={"600px"}>
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={10} alignItems={"flex-start"}>
                <InputGroup display={"flex"} flexDirection="column">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<MdEmail />}
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    bgColor="#f5fcff"
                    className={formik.values.email === "" ? "" : "inputSelect"}
                    ref={inputEmail}
                  />
                  <Text
                    className="placeText"
                    position={"absolute"}
                    top={"8px"}
                    left={"41px"}
                    onClick={(e) => handleInput(e)}
                  >
                    Email
                  </Text>
                  {formik.touched.email && formik.errors.email ? (
                    <Badge colorScheme="red">{formik.errors.email}</Badge>
                  ) : null}
                </InputGroup>
                <InputGroup display={"flex"} flexDirection="column">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<RiLockPasswordFill />}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    bgColor="#f5fcff"
                    className={
                      formik.values.password === "" ? "" : "inputSelect"
                    }
                    ref={inputPass}
                  />
                  <Text
                    className="placeText"
                    position={"absolute"}
                    top={"8px"}
                    left={"41px"}
                    onClick={(e) => handleInput(e)}
                  >
                    Password
                  </Text>
                  {formik.touched.password && formik.errors.password ? (
                    <Badge colorScheme="red">{formik.errors.password}</Badge>
                  ) : null}
                </InputGroup>
                {Auth.status === "pending" ? (
                  <Button colorScheme="blue" isLoading>
                    Loading
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    rightIcon={<MdLogin />}
                    colorScheme="blue"
                  >
                    Login
                  </Button>
                )}
                {Auth.status === "fail" && (
                  <Badge colorScheme="red">{Auth.error}</Badge>
                )}
              </VStack>
            </form>
          </Box>
        </VStack>
        <hr />
        <Box p="20px">
          <Text as="h2" fontSize="2xl">
            Explicación
          </Text>
          <Text mb={"20px"}>
            Aplicación para crear equipos de héroes y villanos. Algunas de las
            funciones que cumple la aplicación son:
          </Text>
          <UnorderedList>
            <ListItem>Email: gabriel.rea@alkemy.org</ListItem>
            <ListItem>Password: react</ListItem>
            <ListItem>Listado de personajes</ListItem>
            <ListItem>Máximo de 3 personajes por equipo</ListItem>
            <ListItem>Buscador</ListItem>
            <ListItem>Protección de rutas</ListItem>
            <ListItem>Mensajes con SweetAlert</ListItem>
            <ListItem>Agregar y eliminar personajes del equipo</ListItem>
            <ListItem>Página para ver más datos del personaje</ListItem>
            <ListItem>
              Estadísticas total entre todos los miembros del equipo
            </ListItem>
          </UnorderedList>
        </Box>
      </Container>
    </HStack>
  );
};

export default LoginScreen;
