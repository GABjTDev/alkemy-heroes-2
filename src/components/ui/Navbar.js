import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../../actions/auth";
import { resetTeams } from "../../actions/teams";

import { HStack, Image, Box, Button, Link } from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";
import LOGO from "../../styles/assets/logoAlkemy.svg";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authAlkemy");
    localStorage.removeItem("villansAlkemy");
    localStorage.removeItem("heroesAlkemy");
    dispatch(logout());
    dispatch(resetTeams());
    navigate("/login");
  };

  return (
    <Box
      as="nav"
      bgColor={"transparent"}
      boxShadow={"1px 1px 5px rgba(0,0,0,.5)"}
      p={"0 40px"}
      height={"60px"}
      display={"flex"}
      mb={"20px"}
    >
      <HStack w={"100%"}>
        <Link to="/" mr={"40px"}>
          <Image src={LOGO} width="150px" alt="Logo de Alkemy" />
        </Link>
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
            >
              Team
            </Link>
          </Box>
          <Box as="li" listStyleType={"none"}>
            <Link
              to="/heroes"
              as={NavLink}
              listStyleType={"none"}
              height={"100%"}
              display={"flex"}
              alignItems={"center"}
              mr={"40px"}
              _hover={{ textDecoration: "none" }}
            >
              Heroes
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
      </HStack>
    </Box>
  );
};

export default Navbar;
