import React from 'react';
import {render} from 'react-dom'; //importe un seul membre ici render du modul react-dom
import update from 'react-addons-update';
import axios from 'axios';
import GenGrille from './grid/GenGrille.jsx';
import Vignettes from './Vignettes.jsx';


import 'ag-grid-root/dist/styles/ag-grid.css';
import 'ag-grid-root/dist/styles/theme-blue.css';


class App extends React.Component {

  constructor(props){
    super(props)
  }
  render () {
    return (

      <div>
        <Vignettes />

        <GenGrille/>
      </div>
      );
  }
}


render(<App/>, document.getElementById('root'));