import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Router from "./components/Router";
import StoreProvider from "./context/StoreProvider";

const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <Router />
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
