import React from 'react';
import ReactDOM from 'react-dom'; 
import update from 'react-addons-update';
import axios from 'axios';
import GenGrille from './grid/GenGrille.jsx';
import Vignettes from './Vignettes.jsx';
import Details from './Details.jsx'

import {Router , Route , IndexRoute , hashHistory } from "react-router";
import App from "./app.jsx";
import NotFound from './NotFound.jsx'

import 'ag-grid-root/dist/styles/ag-grid.css';
import 'ag-grid-root/dist/styles/theme-blue.css';


const app = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Vignettes}> </IndexRoute>
      <Route path="/infos/:origin" component={GenGrille} > </Route>
      <Route path="/infos/:origin/:id" component={GenGrille} > </Route>

      <Route path="*" component={NotFound}/>
    </Route>
  </Router>,
root);




// class App extends React.Component {

//   constructor(props){
//     super(props)
//     this.state = {
//       ORIGIN: ""
//     }
//   }

//   fixerOrigin(val) {
//     this.setState ({ ORIGIN : val })
//     console.log("on nous a renvoyé "+ val)
//   }
//   render () {
//     return (

//       <div>
//         <Vignettes fOrigin = {this.fixerOrigin.bind(this)}/>

//         <GenGrille origin = {this.state.ORIGIN} />
//       </div>
//       );
//   }
// }


// render(<App/>, document.getElementById('root'));