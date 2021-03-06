import { BrowserRouter as Router } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Routes from "./Routes";
import Navbar from "./components/navbar";
import UserProvider from "./contexts/UserProvider";
// import Footer from "./components/footer";

import "./App.css";

const httpLink = createHttpLink({
  // uri: process.env.GRAPHQL_URL || "http://localhost:4000/graphql",
  uri: "https://calm-dusk-10998.herokuapp.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    headers: {
      ...headers,
      authorization: user ? `Bearer ${user.token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Router>
          <Navbar name="Pridely" />
          <Routes />
        </Router>
      </UserProvider>
    </ApolloProvider>
  );
};

export default App;
