import { Route, Switch } from "react-router";
import Add from "./Pages/Add";
import ContactList from "./Pages/ContactList";
import Errors from "./Pages/Errors";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Switch>
        <Route path="/contacts" component={ContactList} />
        <Route path="/add" component={Add} />
        <Route path="/*" component={Errors} />
      </Switch>
    </>
  );
}

export default App;
