import React from 'react'
import { Link } from 'react-router'

export class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
        </ul>
      hello from Main
      </div>
    )
  }

}



//export default Main;