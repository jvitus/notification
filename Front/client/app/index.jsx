import React from 'react';
import {render} from 'react-dom'; //importe un seul membre ici render du modul react-dom
import AwesomeComponent from './AwesomeComponent.jsx';
import HelloWorld from './helloworld.jsx';
import VueList from './VueList.jsx';
import update from 'react-addons-update';
import FormAdd from './Formadd.jsx';
import axios from 'axios';

var ListeExemple =[
{
  "name": "Francine",
  "categorie": "a refaire",
  "texte": "Magna ad cupidatat enim commodo tempor Lorem sunt. Fugiat esse ea est aute laboris est deserunt aliquip duis in sint sit. Labore proident deserunt nostrud id sint incididunt excepteur sint dolore. Laboris veniam mollit duis reprehenderit labore nostrud deserunt ipsum irure officia officia tempor ipsum.\r\n",
  "val": 784,
  "spe": "aucune",
  "priorite": "moyenne",
  "valide": false
},
{
  "name": "Steele",
  "categorie": "a refaire",
  "texte": "Mollit proident minim deserunt laboris. Quis et magna reprehenderit enim esse anim irure velit aliquip. Ea commodo fugiat fugiat consequat reprehenderit labore est anim sint esse officia.\r\n",
  "val": 758,
  "spe": "plein",
  "priorite": "basse",
  "valide": true
},
{
  "name": "Grant",
  "categorie": "a effacer",
  "texte": "In veniam ullamco tempor duis amet nulla occaecat nostrud consectetur veniam esse labore eiusmod. Voluptate voluptate nisi quis excepteur minim mollit veniam eu. Cillum qui enim nostrud eiusmod labore. Aliqua minim elit magna eu eu ullamco non consequat sint eu culpa deserunt incididunt cillum. Enim dolore cupidatat fugiat ad sit adipisicing adipisicing dolor exercitation occaecat quis. Proident tempor enim adipisicing nulla ut esse deserunt commodo fugiat sunt aliquip adipisicing.\r\n",
  "val": 782,
  "spe": "aucune",
  "priorite": "basse",
  "valide": false
},
{
  "name": "Elvia",
  "categorie": "a refaire",
  "texte": "Est cillum excepteur ipsum esse incididunt adipisicing. Labore consequat est veniam ipsum tempor nulla. Nisi est aute in amet aute ut nostrud duis consequat. Velit adipisicing labore sit ullamco exercitation consequat cillum. Est occaecat commodo ipsum in fugiat sit irure dolore proident magna minim nulla proident quis. Veniam labore elit nostrud velit.\r\n",
  "val": 126,
  "spe": "aucune",
  "priorite": "basse",
  "valide": false
},
{
  "name": "Angie",
  "categorie": "a ameliorer",
  "texte": "Duis et eu mollit ex amet consequat do duis sunt laboris cupidatat sit in cillum. Aliquip laboris eiusmod do reprehenderit eiusmod exercitation elit fugiat incididunt aliqua amet elit est. Adipisicing consectetur aute excepteur ullamco nisi deserunt proident ipsum nostrud pariatur nulla ullamco in eu. Commodo adipisicing eiusmod laborum occaecat. Veniam nisi dolore id exercitation labore qui tempor nisi deserunt ut. Id quis enim est nostrud est ullamco Lorem deserunt ipsum mollit qui consectetur adipisicing. Laboris voluptate commodo aliqua exercitation consectetur qui consectetur consectetur.\r\n",
  "val": 617,
  "spe": "aucune",
  "priorite": "moyenne",
  "valide": true
},
{
  "name": "Frank",
  "categorie": "a refaire",
  "texte": "Velit in elit enim proident aute cillum sunt velit sunt proident exercitation mollit laboris officia. Magna nostrud enim nostrud cillum laborum velit dolore mollit. Aute id ullamco nostrud commodo nulla aute et dolor occaecat consectetur officia ut. Ad tempor amet aliqua duis qui laboris incididunt. Culpa ex commodo fugiat et incididunt laborum dolor eu in pariatur sunt amet proident. Consequat ullamco sit fugiat occaecat dolor velit adipisicing incididunt tempor nisi eu id anim qui.\r\n",
  "val": 704,
  "spe": "aucune",
  "priorite": "basse",
  "valide": false
},
{
  "name": "Koch",
  "categorie": "a refaire",
  "texte": "Excepteur commodo eu non dolore commodo enim culpa aliquip irure commodo culpa in proident in. Nisi laboris veniam tempor ullamco officia dolor in voluptate id ea. Veniam veniam do amet irure occaecat adipisicing adipisicing. Do exercitation nulla consectetur incididunt quis non minim officia anim proident ex mollit aliqua. Laboris consequat non fugiat pariatur aliqua laboris qui anim.\r\n",
  "val": 906,
  "spe": "aucune",
  "priorite": "haute",
  "valide": false
},
{
  "name": "Palmer",
  "categorie": "a effacer",
  "texte": "Esse officia eu et aute ut proident. Ut magna aute Lorem incididunt amet aliquip anim dolore. Nisi sint velit id esse voluptate adipisicing pariatur id esse. Occaecat Lorem eu occaecat enim est reprehenderit. Ullamco ea ipsum minim fugiat.\r\n",
  "val": 929,
  "spe": "aucune",
  "priorite": "moyenne",
  "valide": false
},
{
  "name": "Miles",
  "categorie": "a refaire",
  "texte": "Quis amet ut pariatur anim. Pariatur officia do tempor culpa qui laborum cillum ipsum culpa aliquip duis aute. Deserunt enim deserunt quis ut id esse velit id labore duis. Sint voluptate nostrud exercitation ipsum mollit officia exercitation.\r\n",
  "val": 822,
  "spe": "aucune",
  "priorite": "haute",
  "valide": false
},
{
  "name": "Aileen",
  "categorie": "a effacer",
  "texte": "Id sint nisi commodo proident sint nostrud sit nisi sit sit velit cillum esse labore. Culpa culpa anim nisi sit culpa sit aliqua. Anim reprehenderit exercitation sit sit aliquip laborum velit exercitation quis quis. Ex aliquip dolor in fugiat. Voluptate sit velit quis sint deserunt consectetur duis exercitation duis consequat ut consectetur deserunt dolore. Qui labore mollit anim voluptate cillum laborum officia laboris amet cupidatat. Occaecat culpa et aliqua duis cupidatat dolore do culpa non.\r\n",
  "val": 662,
  "spe": "plein",
  "priorite": "haute",
  "valide": false
},
{
  "name": "Emilia",
  "categorie": "a refaire",
  "texte": "Veniam laborum aute nulla nulla. Sit consequat ipsum ea veniam ut commodo. Minim sit anim cillum occaecat consequat nostrud nostrud laborum exercitation ut cupidatat. Id veniam qui est cillum est excepteur enim aute ea cupidatat nisi irure nisi.\r\n",
  "val": 813,
  "spe": "aucune",
  "priorite": "haute",
  "valide": true
},
{
  "name": "Weber",
  "categorie": "a effacer",
  "texte": "Cupidatat sint amet culpa amet ipsum dolor ad culpa ipsum. Do cupidatat velit ad veniam cillum aute sint dolor commodo cillum dolor incididunt. Consequat ea ullamco amet ea ullamco. Anim ipsum et aute commodo esse aliqua ad ut nisi sit ex consectetur reprehenderit. Aliquip cillum dolore et anim magna ex dolor tempor culpa amet elit ipsum. Excepteur quis laborum aliquip veniam veniam sunt eu mollit. Duis qui ex culpa cillum commodo reprehenderit magna esse aute commodo culpa cillum cupidatat.\r\n",
  "val": 333,
  "spe": "aucune",
  "priorite": "haute",
  "valide": true
},
{
  "name": "Monique",
  "categorie": "a refaire",
  "texte": "Irure amet Lorem irure aliquip esse Lorem elit ea cupidatat Lorem dolor nulla. Laboris officia reprehenderit sit commodo nisi. Veniam incididunt labore dolore labore amet do et qui minim officia. Tempor eu laborum mollit laboris elit commodo. Enim ea velit id quis ipsum eiusmod. Ea velit dolore fugiat do tempor.\r\n",
  "val": 415,
  "spe": "plein",
  "priorite": "haute",
  "valide": true
},
{
  "name": "Brooke",
  "categorie": "a refaire",
  "texte": "Exercitation occaecat laboris ipsum aliqua nostrud officia. Tempor minim consectetur laboris do. Adipisicing velit exercitation sint qui exercitation pariatur aliqua esse Lorem. Eiusmod eiusmod ex excepteur cupidatat mollit quis eiusmod esse. Nisi tempor ad pariatur ipsum reprehenderit culpa.\r\n",
  "val": 193,
  "spe": "plein",
  "priorite": "haute",
  "valide": true
}
];

class App extends React.Component {

  constructor(props){
    super(props)
    this.state ={collection : [] , dataRes : []}
    this.onAddBtnClick = this.onAddBtnClick.bind(this);
    this.testGet = this.testGet.bind(this);
  }
  onAddBtnClick(){
    // on ajoute toute la collection
    // concat retourne un nouveau tableau qui concatene l'ancien et celui qu'on veut rajouter
    this.setState( {collection : this.state.collection.concat(ListeExemple) } );

  }
  ajouterUn(element){
    this.setState( {collection:this.state.collection.concat(element) } );
  }
  

 /* onAddBtnClickUnElem(){
    this.setState
  }*/
  testGet() {
    //this.setState ( {dataRes : 1}  );
    let dataResponse = []
    axios.get('https://api.github.com/users/jvitus' )
    .then( function (response) {

      console.log(response.data)
      dataResponse = JSON.stringify(response.data , null , '\n')
      this.setState ( {dataRes : dataResponse  } );
    }.bind(this))
    .catch(function (response){
      console.log(response);
    })
    console.log("apres : " + dataResponse)
    console.log("apres apres");
  }
  render () {
    return (

      <div>
      <button onClick={this.onAddBtnClick} >
      Ajouter collection
      </button>
      <VueList json={this.state.collection} />
      <FormAdd ajouterElement={this.ajouterUn.bind(this)}    >
      </FormAdd>
      <button onClick={this.testGet.bind(this)} >
      tester
      </button>
      data:
      <div>
      {this.state.dataRes}
      </div>
      </div>
      );
  }
}


render(<App/>, document.getElementById('root'));