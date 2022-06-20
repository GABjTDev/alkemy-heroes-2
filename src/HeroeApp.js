import Router from "./routes/Router";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import store from "./store";

import "./styles/styles.scss";

const HeroeApp = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </Provider>
  );
};

export default HeroeApp;
