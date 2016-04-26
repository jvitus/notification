import React from 'react';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      hello from Main
      {this.prop.children}
      </div>
    )
  }

}



export default Main;