import React, { useState } from "react";
import "./App.css";
import { engineContext } from "./context/engineContext";
import MainPage from "./pages/MainPage";
import AddPage from "./pages/AddPage";
import ResultPage from "./pages/ResultPage";
import initialStates from "./store/initialStates.json";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




const App = () => {
  const [data, setData] = useState(initialStates);

  return (
    <Router>
      <engineContext.Provider value={data}>
        <Switch>
          <Route path="/resultpage" component={ResultPage} />
          <Route path = "/addpage" component={AddPage} />
          <Route exact path = "/" component={MainPage} />
        </Switch>
      </engineContext.Provider>
    </Router>
  );
};

export default App;
