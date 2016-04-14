import React from 'react';

class VueElementList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li >
       nom : {this.props.json.name}<br/>
       cat : {this.props.json.categorie}<br/>
       prio :{this.props.json.priorite}<br/>
       {(this.props.json.valide ? "Validé" : "A faire")}
      </li>
    );
  }

}

export default VueElementList;