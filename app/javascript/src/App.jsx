import React, { useEffect } from "react";
import { initializeLogger } from "common/logger";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { registerIntercepts } from "apis/axios";

import Dashboard from "./components/Dashboard";
const App = () => {
  useEffect(() => {
    initializeLogger();
    logger.info("Log from js-logger");
    registerIntercepts();
  }, []);

  return (
    <Router>
      <ToastContainer />
      <Dashboard />
    </Router>
  );
};

export default App;
