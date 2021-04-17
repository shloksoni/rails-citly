import React, { useEffect } from "react";
import { initializeLogger } from "common/logger";
import NavBar from "components/NavBar";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";
const App = () => {
  useEffect(() => {
    /*eslint no-undef: "off"*/
    initializeLogger();
    logger.info("Log from js-logger");
  }, []);

  return (
    <Router>
      <Dashboard />
    </Router>
  );
};

export default App;
