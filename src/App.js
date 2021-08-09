import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import Navbar from "./components/navbar";

import "./App.css";
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <Navbar name="Pridely" />
      <Routes />
      <Footer name="Copyright Pridely Inc 2021" />
    </Router>
  );
};

export default App;
