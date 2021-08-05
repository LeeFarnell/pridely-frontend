import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import Navbar from "./components/navbar";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar name="Pridely" />
      <Routes />
    </Router>
  );
};

export default App;
