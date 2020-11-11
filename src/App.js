import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//components
import Landing from './Components/Landing/Landing';
import Serie from './Components/Serie/Serie';
import Navbar from './Components/Elements/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/serie/:id" component={Serie} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
