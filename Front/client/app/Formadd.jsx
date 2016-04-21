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
      priorite : 0 ,
      valide: false
    }
    this.alertValue = this.alertValue.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeCat = this.handleChangeCat.bind(this)
    this.handleChangeTxt = this.handleChangeTxt.bind(this)
    this.handleChangeVal = this.handleChangeVal.bind(this)
    this.handleChangeSpe = this.handleChangeSpe.bind(this)
    this.handleChangePrio = this.handleChangePrio.bind(this)
    this.handleChangeValide = this.handleChangeValide.bind(this)
  }

  handleChangeName (e){
    console.log(" saisi temp name :" +e.target.value)
    let nameOld = e.target.value
    this.setState({
      name: nameOld
    })
  }

  handleChangeCat (e){
    console.log(" saisi temp cat  :" +e.target.value)
    let  catOld = e.target.value
    this.setState({
      categorie: catOld
    })
  }

  handleChangeTxt (e){
    console.log(" saisi temp texte :" +e.target.value)
    let texteOld = e.target.value
    this.setState({
      texte: texteOld
    })
  }
  handleChangeVal (e){
    console.log(" saisi temp val :" +e.target.value)
    let valOld = e.target.value
    this.setState({
      val: valOld
    })
  }

  handleChangeSpe (e){
    console.log(" saisi temp spe :" +e.target.value)
    let SpeOld = e.target.value
    this.setState({
      spe: SpeOld
    })
  }
  handleChangePrio (e){
    console.log(" saisi temp prio :" +e.target.value)
    let PrioOld = e.target.value
    this.setState({
      priorite: PrioOld
    })
  }
  handleChangeValide (e){
    console.log(" saisi temp valide :" +this.state.valide)
    this.setState({
      valide: !this.state.valide
    })
  }


  alertValue (e) {
    console.log("on va renvoyer :"+
      "name : "+this.state.name+"\n"+
      "categorie : "+this.state.categorie+"\n"+
      "texte : "+this.state.texte+"\n"+
      "val : "+this.state.val+"\n"+
      "spe : " +this.state.spe+"\n"+
      "priorite : "+this.state.priorite+"\n"+
      "valide : " +this.state.valide+"\n"
      ) 

    let element = 
    {
      "name": this.state.name,
      "categorie": this.state.categorie,
      "texte": this.state.texte,
      "val": this.state.val,
      "spe": this.state.spe,
      "priorite": this.state.priorite,
      "valide": this.state.valide
    }

    console.log("element : " +element);
    
    this.props.ajouterElement(element);

    
  }

  render() {
    return (
      <div>
      formulaire pour ajouter un element
      <br/>
      Name :
      <input 
      type="text" 
      placeholder="nom"
      value={this.state.name}
      onChange= {this.handleChangeName}
      />
      <br/>
      Categorie :
      <select  onChange= {this.handleChangeCat} defaultValue="{this.state.categorie}">
      <option value="A refaire">Refaire</option>
      <option value="A effacer">Effacer</option>
      <option value="A ameliorer">Ameliorer</option>
      </select>
      <br/>
      texte :
      <input 
      type="text" 
      placeholder="texte"
      value={this.state.texte}
      onChange= {this.handleChangeTxt}
      />
      <br/>
      valeur :
      <input 
      type="number"
      placeholder="valeur"
      value={this.state.val}
      onChange= {this.handleChangeVal}
      />
      <br/>
      specification :
      <input 
      type="text" 
      placeholder="specification"
      value={this.state.spe}
      onChange= {this.handleChangeSpe}
      />
      <br/>
      priorite : 
      <input 
      type="range" 
      value = "0"
      max = "50"
      min = "0"
      step = "5"
      placeholder="priorite"
      value={this.state.priorite}
      onChange= {this.handleChangePrio}
      />
      <br/>
      valide : 
      <input 
      type="checkbox" 
      checked={this.state.valide}
      onChange= {this.handleChangeValide}
      />
      <br/>
      <button onClick={this.alertValue}>Ajouter un element</button>
      </div>
      );
  }

}



export default FormAdd;