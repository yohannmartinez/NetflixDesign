import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//components
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Elements/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
