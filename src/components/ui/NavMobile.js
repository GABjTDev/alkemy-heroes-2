import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Link,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { NavLink, Link as LinkRouter, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import LOGO from "../../styles/assets/logoAlkemy.svg";
import NavForm from "./NavForm";
import { logout } from "../../store/reducers/authSlice";
import { useDispatch } from "react-redux";

const NavMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("tokenAlkemy");
    localStorage.removeItem("villansAlkemy");
    localStorage.removeItem("heroesAlkemy");
    dispatch(logout());
    navigate("/login");
  };

  const pathname = window.location.pathname.slice("1");

  return (
    <Box
      bgColor={"white"}
      boxShadow={"1px 1px 5px rgba(0,0,0,.5)"}
      p={"0 40px"}
      height={"60px"}
      display={"flex"}
      marginBottom={"20px"}
      alignItems={"center"}
      position={"sticky"}
      top={"0"}
      width={"100%"}
      zIndex={1000}
      justifyContent={"space-between"}
    >
      <LinkRouter to="/" mr={"40px"}>
        <Image src={LOGO} width="150px" alt="Logo de Alkemy" />
      </LinkRouter>
      <Button ref={btnRef} colorScheme="blue" onClick={onOpen}>
        <GiHamburgerMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <LinkRouter to="/" mr={"40px"}>
              <Image src={LOGO} width="150px" alt="Logo de Alkemy" />
            </LinkRouter>
          </DrawerHeader>

          <DrawerBody>
            <VStack w={"100%"} height={"100%"}>
              <Box
                as="ul"
                display={"flex"}
                flexDirection={"column"}
                w={"100%"}
                height={"100%"}
              >
                <Box as="li" listStyleType={"none"} marginBottom={"40px"}>
                  <Link
                    to="/"
                    as={NavLink}
                    listStyleType={"none"}
                    height={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    _hover={{ textDecoration: "none" }}
                    fontSize={"20px"}
                    fontWeight={"600"}
                  >
                    Team
                  </Link>
                </Box>
                <Box as="li" listStyleType={"none"} marginBottom={"40px"}>
                  <Link
                    to="/characters"
                    as={NavLink}
                    listStyleType={"none"}
                    height={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    fontSize={"20px"}
                    fontWeight={"600"}
                    _hover={{ textDecoration: "none" }}
                  >
                    Characters
                  </Link>
                </Box>
                <Box as="li" listStyleType={"none"} flexGrow={"1"}>
                  {pathname === "characters" && <NavForm />}
                </Box>
                <Box as="li" listStyleType={"none"} marginBottom={"20px"}>
                  <Button
                    onClick={handleLogout}
                    type="submit"
                    rightIcon={<MdLogout />}
                    colorScheme="red"
                    variant="outline"
                  >
                    Logout
                  </Button>
                </Box>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavMobile;
