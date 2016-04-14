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
        this.props.json.map( function(listvalue,i)
        {
          return <VueElementList key={i} json={listvalue}  />;
        })
      }
      </ul>
    );
  }

}



export default VueList;