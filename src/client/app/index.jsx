import React from 'react';
import {render} from 'react-dom'; //importe un seul membre ici render du modul react-dom
import AwesomeComponent from './AwesomeComponent.jsx';
import HelloWorld from './helloworld.jsx';
import VueList from './VueList.jsx';
import update from 'react-addons-update';
import FormAdd from './Formadd.jsx';

var ListeExemple =[
  { name : 'test' , categorie : 'a refaire ' ,texte :"blablabla", val :12, spe : "aucune" , priorite :'haute' , valide :false},
  { name : 'test1' , categorie : 'en cours ' ,texte :"blablabla", val : 12, spe : "aucune" , priorite :'haute' , valide :false},
  { name : 'test2' , categorie : 'a effacer ' ,texte :"blablabla", val : 12, spe : "aucune" , priorite :'haute' , valide :true},
  { name : 'test3' , categorie : 'a ameliorer ' ,texte :"blablabla", val : 12, spe : "aucune" , priorite :'moyenne' , valide :false},
  { name : 'test4' , categorie : 'a refaire ' ,texte :"blablabla", val : 12, spe : "aucune" , priorite :'basse' , valide :false},
  { name : 'test5' , categorie : 'a refaire ' ,texte :"blablabla", val : 12, spe : "aucune" , priorite :'haute' , valide :true},
  { name : 'test6' , categorie : 'a refaire ' ,texte :"blablabla", val : 12, spe : "aucune" , priorite :'basse' , valide :false},
  { name : 'test7' , categorie : 'a refaire ' ,texte :"blablabla", val : 12, spe : "aucune" , priorite :'haute' , valide :false},
  { name : 'test8' , categorie : 'a refaire ' ,texte :"blablabla", val : 12, spe : "aucune" , priorite :'moyenne' , valide : true},


  ];

class App extends React.Component {

  constructor(props){
    super(props)
    this.state ={collection : []}
    this.onAddBtnClick = this.onAddBtnClick.bind(this);
  }
  onAddBtnClick(){
    // on ajoute toute la collection
    // concat retourne un nouveau tableau qui concatene l'ancien et celui qu'on veut rajouter
    this.setState( {collection : this.state.collection.concat(ListeExemple) } );

  }

 /* onAddBtnClickUnElem(){
    this.setState
  }*/

 render () {
    return (

      <div>
       <button onClick={this.onAddBtnClick} >
          Ajouter collection
        </button>
        <VueList json={this.state.collection} />
        <FormAdd />
      </div>
    );
  }
}


  render(<App/>, document.getElementById('root'));