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

	/*	let dataResponse = []
		 axios.get('http://127.0.0.1:6544/alerting-core/details/276')
		 	.then( function (response) {
		 			this.setState ( {dataRow : response.data  } )
		 	}.bind(this))
		 	.catch(function (response){
		 			console.log(response)
		 		})*/
	}

	render () {

		return (

				<div>
				bim vue details
				{this.state.dataRow}

				</div>
		);
	}

}
