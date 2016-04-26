import React from 'react';
import VueElementList from './VueElementList.jsx';


class VueList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
      {
        this.props.json.map( function(listvalue)
        {
          return (
              <VueElementList key={listvalue.id} json={listvalue}  />     
            );
        }.bind(this) )
      }
      </ul>
    );
  }

}



export default VueList;