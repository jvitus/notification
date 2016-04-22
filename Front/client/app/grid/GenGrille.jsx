var React = require('react');
import {AgGridReact} from 'ag-grid-react';
import axios from 'axios';

class GenGrille extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {
			showGrid: true,
			dataRow : [],
			dataCol :[]
		}
		 this.transformerCol = this.transformerCol.bind(this)

		this.gridOptions = {
		// this is how you listen for events using gridOptions
			onModelUpdated () {
			  console.log('event onModelUpdated received');
			},
			rowHeight: 30,
			onRowClicked: (row) => {
				console.log("on va rediriger vers une vue details")
			},
			// this is a simple property
			rowBuffer: 10 // no need to set this, the default is fine for almost all scenarios
		};

		var resizeGrid = () => {
			this.gridOptions.api.sizeColumnsToFit()
		}
		
	}
	componentDidMount() {
		let dataResponse = []

		axios.get('http://127.0.0.1:6544/alerting-core/logs/infos' )
		.then( function (response) {
				this.setState ( {dataRow : response.data  } )
				this.transformerCol(this.state.dataRow[0])
		}.bind(this))
		.catch(function (response){
				console.log(response)
			}) 
		}
/* 
  prend en entré un json 
  se sert des cles ( { key : val } )
  generer les headers du tableau de la forme ( { headerNale : key , filed : key , witdh : nb_pixel })
  */

		transformerCol(JsonObjet){
				var colAutoGen = []
				for(var champ in JsonObjet){
				colAutoGen.push({
						headerName : champ,
						field: champ,
						width : 150
						})
				}
		this.setState( {dataCol : colAutoGen} )
		}

	onGridReady(params) {
		this.api = params.api;
		this.columnApi = params.columnApi;
	}


	render () {
		return (
				<div>
						<div className="ag-dark">
								<AgGridReact
								gridOptions={this.gridOptions}
								onGridReady={this.onGridReady.bind(this)}
								columnDefs = {this.state.dataCol}
								rowData = {this.state.dataRow}
								rowSelection="multiple"
								enableColResize="true"
								enableSorting="true"
								enableFilter="true"
								groupHeaders="true"
								rowHeight="22"
								debug="true"
								/>
						</div>
				</div>
		);
	}

}

export default GenGrille;