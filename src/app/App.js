import '#app/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import { Header, Footer, IndividualKit } from "#components";
// Pages
import { About, Home, Kits, Support } from "#pages";


const App = () => {
  return (
    <Router>
      <div className="App bg-light">
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/support" exact component={() => <Support />} />
          <Route path="/kits" exact component={() => <Kits />} />
          <Route path="/kits/:kitType" exact component={() => <IndividualKit />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
