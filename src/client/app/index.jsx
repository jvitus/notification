import React from 'react';
import {render} from 'react-dom'; //importe un seul membre ici render du modul react-dom
import AwesomeComponent from './AwesomeComponent.jsx';
import HelloWorld from './helloworld.jsx';
import VueList from './VueList.jsx';

var ListeExemple =[
  { name : 'test' , categorie : 'a refaire ' , priorite :'haute' , valide :false},
  { name : 'test1' , categorie : 'en cours ' , priorite :'haute' , valide :false},
  { name : 'test2' , categorie : 'a effacer ' , priorite :'haute' , valide :true},
  { name : 'test3' , categorie : 'a ameliorer ' , priorite :'moyenne' , valide :false},
  { name : 'test4' , categorie : 'a refaire ' , priorite :'basse' , valide :false},
  { name : 'test5' , categorie : 'a refaire ' , priorite :'haute' , valide :true},
  { name : 'test6' , categorie : 'a refaire ' , priorite :'basse' , valide :false},
  { name : 'test7' , categorie : 'a refaire ' , priorite :'haute' , valide :false},
  { name : 'test8' , categorie : 'a refaire ' , priorite :'moyenne' , valide : true},


  ];

class App extends React.Component {

 render () {
    return (
      <div>
        <VueList json={ListeExemple} />
      </div>
    );
  }
}


  render(<App/>, document.getElementById('root'));