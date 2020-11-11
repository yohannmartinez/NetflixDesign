import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//components
import Landing from './Components/Landing/Landing'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
