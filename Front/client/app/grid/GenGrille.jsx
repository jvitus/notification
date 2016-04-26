var React = require('react');
import {AgGridReact} from 'ag-grid-react';
import axios from 'axios';

class GenGrille extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {
			showGrid: true,
			dataRow : [],
			dataCol :[],
			quickFilterText: null
		}
		 this.transformerCol = this.transformerCol.bind(this)
		 this.sizeToFit = this.sizeToFit.bind(this)

		this.gridOptions = {
		// this is how you listen for events using gridOptions
			onModelUpdated () {
			  console.log('event onModelUpdated received');
			},
			rowHeight: 30,
			onRowClicked: (row) => {
				console.log("on va rediriger vers une vue details")
				console.log(row.data.ID)
						let dataResponse = []

				axios.get('http://127.0.0.1:6544/alerting-core/details/'+row.data.ID )
				.then( function (response) {
						this.setState ( {dataRow : response.data  } )
						this.transformerCol(this.state.dataRow[0])

				}.bind(this))
				.catch(function (response){
						console.log(response)
					}) 


			},
			// this is a simple property
			rowBuffer: 10, // no need to set this, the default is fine for almost all scenarios
			enableFilter : true
		};


		


		var resizeGrid = () => {
			this.gridOptions.api.sizeColumnsToFit()
			}	
		}

		onQuickFilterText(event) {
			console.log("filtre :"+event.target.value)
			this.setState({quickFilterText: event.target.value});
		}

	sizeToFit() {
    this.gridOptions.api.sizeColumnsToFit();
		}

	componentDidMount() {
		let dataResponse = []

		axios.get('http://127.0.0.1:6544/alerting-core/infos' )
		.then( function (response) {
				this.setState ( {dataRow : response.data  } )
				this.transformerCol(this.state.dataRow[0])
				this.sizeToFit()
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
					console.log("champ :" , champ)
				colAutoGen.push({
						headerName : champ,
						field: champ,
						width : 150,
						filter: 'text',
    				filterParams: {apply: true, newRowsAction: 'keep'}
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
				<input type="text" onChange={this.onQuickFilterText.bind(this)} placeholder="Type text to filter..."/>
						<div style={{height: 400}} className="ag-blue">
								<AgGridReact
								gridOptions={this.gridOptions}
								quickFilterText={this.state.quickFilterText}
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