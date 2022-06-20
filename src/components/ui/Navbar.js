import { NavLink, Link as LinkRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { HStack, Image, Box, Button, Link } from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";
import LOGO from "../../styles/assets/logoAlkemy.svg";
import NavForm from "./NavForm";
import { logout } from "../../store/reducers/authSlice";
import { resetTeam } from "../../store/reducers/teamsSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("tokenAlkemy");
    localStorage.removeItem("villansAlkemy");
    localStorage.removeItem("heroesAlkemy");
    dispatch(logout());
    dispatch(resetTeam());
    navigate("/login");
  };

  const pathname = window.location.pathname.slice("1");

  return (
    <Box
      as="nav"
      bgColor={"white"}
      boxShadow={"1px 1px 5px rgba(0,0,0,.5)"}
      p={"0 40px"}
      height={"60px"}
      display={"flex"}
      position={"sticky"}
      top={"0"}
      width={"100%"}
      zIndex={1000}
      mb={"10px"}
    >
      <HStack w={"100%"}>
        <Box mr={"40px"}>
          <LinkRouter to="/">
            <Image src={LOGO} width="150px" alt="Logo de Alkemy" />
          </LinkRouter>
        </Box>
        <Box as="ul" display={"flex"} height={"100%"} w={"100%"}>
          <Box as="li" listStyleType={"none"}>
            <Link
              to="/"
              as={NavLink}
              listStyleType={"none"}
              height={"100%"}
              display={"flex"}
              alignItems={"center"}
              mr={"40px"}
              _hover={{ textDecoration: "none" }}
              _focus={{ outline: "none" }}
              fontSize={"20px"}
              fontWeight={"600"}
              className={"btn-link"}
            >
              Team
            </Link>
          </Box>
          <Box as="li" listStyleType={"none"}>
            <Link
              to="/characters"
              as={NavLink}
              listStyleType={"none"}
              height={"100%"}
              display={"flex"}
              alignItems={"center"}
              mr={"40px"}
              fontSize={"20px"}
              fontWeight={"600"}
              _hover={{ textDecoration: "none" }}
              _focus={{ outline: "none" }}
              className={"btn-link"}
            >
              Characters
            </Link>
          </Box>

          <Box
            as="li"
            listStyleType={"none"}
            display={"flex"}
            alignItems={"center"}
            flexGrow={1}
            width={"100%"}
            justifyContent={"flex-end"}
          >
            {pathname === "characters" && <NavForm />}
            <Button
              onClick={handleLogout}
              type="submit"
              rightIcon={<MdLogout />}
              colorScheme="red"
              variant="outline"
              marginLeft={"10px"}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default Navbar;
