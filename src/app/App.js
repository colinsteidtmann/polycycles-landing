import '#app/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import { Header, Footer } from "#components";
import ApiToastUpdate from "./ApiToastUpdate";
// Pages
import { Home, Bikes, BikeDetails, Help, NewListing, Terms } from "#pages";
// Firebase
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app"
const firebaseConfig = {
  apiKey: "AIzaSyD62-uzn0C85cFy42nXA1L5F3CZ-72AqL8",
  authDomain: "polycycles-26c39.firebaseapp.com",
  projectId: "polycycles-26c39",
  storageBucket: "polycycles-26c39.appspot.com",
  messagingSenderId: "176931862001",
  appId: "1:176931862001:web:b6c1db99cc074b94208050",
  measurementId: "G-EDVKZN8REH"
};

const firebaseApp = initializeApp(firebaseConfig);

const analytics = getAnalytics();

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
