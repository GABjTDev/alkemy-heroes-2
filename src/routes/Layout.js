import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import NavMobile from "../components/ui/NavMobile";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(true);

  function handleResize() {
    const { innerWidth: width } = window;

    if (width > 860) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }

  useEffect(() => {
    const { innerWidth: width } = window;

    if (width > 860) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      pb={"20px"}
      backgroundImage={
        "linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)"
      }
    >
      {isMobile ? <NavMobile /> : <Navbar />}

      <Outlet />
    </Box>
  );
};

export default Layout;
