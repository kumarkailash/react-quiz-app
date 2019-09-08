import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nevbar from '../contenor/nevbar'
import Home from '../contenor/Home'
import Questions from '../contenor/questions'
import Detail from '../contenor/detail'




function BasicExample() {
  return (
    <Router>
      <div>
       

        <Route exact path="/" component={Nevbar} />
        <Route path="/Home" component={Home} />
        <Route path="/questions" component={Questions} />
        <Route path="/detail" component={Detail} />

      </div>
    </Router>
  );
}

export default BasicExample;
