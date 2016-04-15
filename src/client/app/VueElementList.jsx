import React from 'react';

class VueElementList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hide : 'none'};
    this.onDetailClick = this.onDetailClick.bind(this);
  }

  onDetailClick() {
  	let newHideState;
  	if (this.state.hide == 'none'){
  		newHideState= 'block';
  	}
	else {
		newHideState = 'none';
	}
	this.setState({hide : newHideState});
  }

  render() {
    return (
      <li onClick={this.onDetailClick}>
       nom : {this.props.json.name}<br/>
       cat : {this.props.json.categorie}<br/>
       	<detail style={{display: this.state.hide, color:'red'}}>
      	 prio :{this.props.json.priorite}<br/>
      	 texte : {this.props.json.texte}<br/>
      	 val : {this.props.json.val}<br/>
      	 spe : {this.props.json.spe}<br/>
       	</detail>
       {(this.props.json.valide ? "Validé" : "A faire")}
      </li>
    );
  }

}

export default VueElementList;