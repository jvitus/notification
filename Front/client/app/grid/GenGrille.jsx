var React = require('react');
import {AgGridReact} from 'ag-grid-react';
var colDef = [
		{ headerName:"Id", field : "id" , width: 150},
		{ headerName:"Name", field : "name", width: 150},
		{ headerName:"Categorie", field : "categorie", width: 150},
		{ headerName:"Texte", field : "texte", width: 150},
		{ headerName:"Valeur", field : "val", width: 150},
		{ headerName:"Spe", field : "spe", width: 150},
		{ headerName:"Priorite", field : "priorite", width: 150},
		{ headerName:"Valide", field : "valide", width: 150}
];
class GenGrille extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {
			showGrid: true,
			DataCol : []
		};

		this.gridOptions = {
		// this is how you listen for events using gridOptions
			onModelUpdated () {
			  console.log('event onModelUpdated received');
			},
			rowHeight: 30,
			onRowClicked: (row) => {
				console.log(row)
			},
			// this is a simple property
			rowBuffer: 10 // no need to set this, the default is fine for almost all scenarios
		};

		var resizeGrid = () => {
			this.gridOptions.api.sizeColumnsToFit()
		}
		
	}
	/* 
	prend en entré un json 
	se sert des cles ( { key : val } ) 
	generer les headers du tableau
	*/
	transformerCol(JsonObjet){
		var colAutoGen = []
			for (var champ in JsonObjet){
				colAutoGen.push({
					headerName : champ,
					field: champ,
					width : 150
				})
			}

		this.setState( {DataCol : colAutoGen} )
		

	}

	componentWillReceiveProps(){
		if(this.props.DataRow[0]){
				this.transformerCol(this.props.DataRow[0])
			
			var allColumnIds = [];
			this.state.DataCol.forEach( function(columnDef) {
				allColumnIds.push(columnDef.field);
				});
			this.gridOptions.columnApi.autoSizeColumns(allColumnIds);
		}
	}

	onGridReady(params) {
		this.api = params.api;
		this.columnApi = params.columnApi;
	}

		onShowGrid(show) {
		this.setState({
			showGrid: show
			});
	}

	render () {
		return (
			<div className="ag-dark">
				<AgGridReact
					gridOptions={this.gridOptions}
					onGridReady={this.onGridReady.bind(this)}
					columnDefs = {this.state.DataCol}
					rowData = {this.props.DataRow}
					rowSelection="multiple"
					enableColResize="true"
					enableSorting="true"
					enableFilter="true"
					groupHeaders="true"
					rowHeight="22"
					debug="true"
				/>
			</div>
		);
	}

}

export default GenGrille;