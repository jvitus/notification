var React = require('react');
import {AgGridReact} from 'ag-grid-react';
import axios from 'axios';




export default class Details extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			dataRow : []
		}
	/*	 this.transformerCol = this.transformerCol.bind(this)
		 this.sizeToFit = this.sizeToFit.bind(this)*/

	}


	componentDidMount() {
		console.log("id a recup" +this.props.routeParams.id);
		let dataResponse = []
		 axios.get('http://127.0.0.1:6544/alerting-core/infos/'+this.props.routeParams.id)
		 	.then( function (response) {
		 			this.setState ( {dataRow : response.data[0]  } )
		 	}.bind(this))
		 	.catch(function (response){
		 			console.log(response)
		 		})
	}

	render () {

		return (

				<div>
				bim vue details
				ID : {this.state.dataRow["ID"]}
				LOG_Message :  {this.state.dataRow["LOG_MESSAGE"]}
				Message_NUMBER: {this.state.dataRow["MESSAGE_NUMBER"]}
				ORIGIN: {this.state.dataRow["ORIGIN"]}
				DATE: {this.state.dataRow["JCRE"]}
				LOG_LEVEL: {this.state.dataRow["LOG_LEVEL"]}
				DOMAINE: {this.state.dataRow["DOMAINE"]}
				LOGUSER: {this.state.dataRow["LOGUSER"]}
				SCOPE: {this.state.dataRow["SCOPE"]}
				OTHERSINFOS: {this.state.dataRow["OTHERSINFOS"]}

				</div>
		);
	}

}
