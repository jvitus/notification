import React from 'react';
import axios from 'axios';
class Vignettes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listeVignettes : []
    }
    this.onDetailClick = this.onDetailClick.bind(this);
  }

  onDetailClick(index) {
    console.log("boum on a clique sur "+index)
    console.log("on va donc sur le domaine " +this.state.listeVignettes[index].ORIGIN)
  }

    componentDidMount() {
    let dataResponse = []

    axios.get('http://127.0.0.1:6544/alerting-core/vignettes' )
    .then( function (response) {
        this.setState ( {listeVignettes : response.data  } )
    }.bind(this))
    .catch(function (response){
        console.log(response)
      }) 
    }

  render() {
    return (
      <ul>
      {

        this.state.listeVignettes.map( function(listval,i)
        {
          var clickIndex = this.onDetailClick.bind(this,i)
          return (
              <li key={i} onClick={clickIndex}>
                {listval.ORIGIN} 
                <b> {listval.NB_ERREUR} erreurs</b>
              </li>     
            );
        }.bind(this) )
      }
      </ul>
    );
  }

}



export default Vignettes;