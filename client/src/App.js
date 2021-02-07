import React from "react"
import Search from "./pages/Search"
import Saved from "./pages/Saved"
import Navigation from "./components/Navigation/Navigation"
import { BrowserRouter as Router, Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <div>
      <Navigation />
      
      <Route exact path="/" component={Search} />
      <Route path="/Saved" component={Saved} />
      </div>
    </Router>
  );
}

export default App;

