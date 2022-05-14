import Router from "./routes/Router";
import { Provider } from "react-redux";
import { storage } from "./storage/storage";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/styles.scss";

const HeroeApp = () => {
  return (
    <Provider store={storage}>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </Provider>
  );
};

export default HeroeApp;
