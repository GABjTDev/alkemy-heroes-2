import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../../actions/auth";
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
} from "@chakra-ui/react";
import { MdEmail, MdLogin } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

// IMAGES
import BG from "../../styles/assets/bg.jpg";
import LOGO from "../../styles/assets/logoAlkemy.svg";

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    } else if (
      values.email !== "challenge@alkemy.org" &&
      values.email !== "gabriel@alkemy.org"
    ) {
      errors.email = "Email Incorrect";
    }

    if (values.password !== "react") {
      errors.password = "Password Incorrect";
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

      if (email === "challenge@alkemy.org" && password === "react") {
        axios({
          method: "get",
          url: `http://challenge-react.alkemy.org/?email=${email}&password=${password}`,
        }).then((res) => {
          const newUser = {
            user: email,
            token: res.data.token,
          };
          localStorage.setItem("authAlkemy", JSON.stringify(newUser));
          dispatch(login(newUser));
          navigate("/");
        });
      } else if (email === "gabriel@alkemy.org" && password === "react") {
        const newUser = {
          user: email,
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE",
        };
        dispatch(login(newUser));
      }
    },
  });

  return (
    <HStack height={"100vh"} alignItems="flex-start">
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
      ></Container>
      <Container
        p={"40px 60px"}
        maxW="100%"
        display="flex"
        flexDirection="column"
      >
        <Image src={LOGO} width="150px" alt="Logo de Alkemy" mb={"50px"} />
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
                  />
                  <Text
                    className="placeText"
                    position={"absolute"}
                    top={"8px"}
                    left={"41px"}
                  >
                    Email
                  </Text>
                  {formik.touched.email && formik.errors.email ? (
                    <div role="alert">{formik.errors.email}</div>
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
                  />
                  <Text
                    className="placeText"
                    position={"absolute"}
                    top={"8px"}
                    left={"41px"}
                  >
                    Password
                  </Text>
                  {formik.touched.password && formik.errors.password ? (
                    <div role="alert">{formik.errors.password}</div>
                  ) : null}
                </InputGroup>
                <Button
                  type="submit"
                  rightIcon={<MdLogin />}
                  colorScheme="blue"
                >
                  Login
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
        <hr />
      </Container>
    </HStack>
  );
};

export default LoginScreen;
