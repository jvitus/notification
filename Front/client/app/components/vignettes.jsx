import React from 'react';
import axios from 'axios';
import Label from 'react-bootstrap/lib/Label'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Image from 'react-bootstrap/lib/Image'
import {Link} from 'react-router'

class Vignettes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listeVignettes : []
    }
    this.onDetailClick = this.onDetailClick.bind(this);
  }

  onDetailClick(index) {
  }

  componentDidMount() {
    let dataResponse = []

    axios.get('http://127.0.0.1:6544/alerting-core/vignettes' )
      .then( function (response) {
        this.setState ( {listeVignettes : response.data  } )
      }.bind(this))
      .catch(function (response){
        console.log(response)
      })
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          {
            this.state.listeVignettes.map( function(listval,i)
            {
              var clickIndex = this.onDetailClick.bind(this,i)
              let path = "/infos/"+listval.ORIGIN
              return (
                  <Col  onClick={clickIndex} xs={12} sm={6} md={4} lg={3} className="text-center" >
                    <Link key={i} to={path} >
                    <Image src="./assets/thumbnail.png" rounded />
                    <h3 >{listval.ORIGIN} <Label bsStyle="danger"> {listval.NB_ERREUR} </Label> </h3>
                    </Link>
                  </Col>
              );
            }.bind(this) )
          }
        </Row>
      </Grid>
    );
  }

}



export default Vignettes;
