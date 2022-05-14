import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";

const Layout = () => {
  return (
    <Box pb={"40px"}>
      <Navbar />

      <Outlet />
    </Box>
  );
};

export default Layout;
