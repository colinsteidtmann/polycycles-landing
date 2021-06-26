import '#app/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import { Header, Footer } from "#components";
import ApiToastUpdate from "./ApiToastUpdate";
// Pages
import { Home, Bikes, BikeDetails, Help, NewListing, Terms } from "#pages";


const App = () => {
  return (
    <Router>
      <div className="App bg-light ">
        <ApiToastUpdate />
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/bikes" exact component={() => <Bikes />} />
          <Route path="/bikes/:id" exact component={() => <BikeDetails />} />
          <Route path="/newListing" exact component={() => <NewListing />} />
          <Route path="/help" exact component={() => <Help />} />
          <Route path="/terms" exact component={() => <Terms />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
