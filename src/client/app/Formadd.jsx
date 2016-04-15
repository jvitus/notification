import React from 'react';

class FormAdd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
                  name : '',
                  categorie: '',
                  texte : '',
                  val : 0,
                  spe: '',
                  priorite :'' ,
                  valide: false
    }
    this.alertValue = this.alertValue.bind(this);
  }

  alertValue () {
    console.log("evaluation")
    
  }

  render() {
    return (
      <div>
      formulaire pour ajouter un element
      <input ref="input" defaultValue="test!" />
        <button onClick={this.alertValue}>Alert Value</button>
      </div>
    );
  }

}



export default FormAdd;