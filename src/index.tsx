import { chakra, ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App2 from "./App2";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";

import { extendTheme } from "@chakra-ui/react";
//const container = document.getElementById("root")!;
//const root = ReactDOM.createRoot(container);

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App2 />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
