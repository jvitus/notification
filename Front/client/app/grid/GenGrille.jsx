var React = require('react');
import {AgGridReact} from 'ag-grid-react';
import axios from 'axios';
import { browserHistory } from 'react-router'



export default class GenGrille extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			showGrid: true,
			dataRow : [],
			dataCol :[],
			quickFilterText: null,
			rowHeight : 30,
			allOfTheData : []
		}
		 this.transformerCol = this.transformerCol.bind(this)
		 this.sizeToFit = this.sizeToFit.bind(this)

		this.gridOptions = {
		// this is how you listen for events using gridOptions
			onModelUpdated () {
			},
			pageSize : 10,
			rowHeight: 30,
			rowModelType: 'pagination',
			rowBuffer: 10, // no need to set this, the default is fine for almost all scenarios
			enableFilter : false,
			onRowClicked: (row) => {
						/*quand on clique sur une ligne
						on veut attaquer l'API avec l'id de la ligne en question
						pour afficher les details
						*/
				browserHistory.push("/infos/"+this.props.routeParams.origin+"/"+row.data.ID)
			}
		}


	}


	componentDidMount() {
		window.addEventListener('resize', this.sizeToFit)
		this.createNewDatasource();

	}

	onQuickFilterText(event) {
		this.setState({quickFilterText: event.target.value});
	}

	sizeToFit(e) {
    this.gridOptions.api.sizeColumnsToFit();
	}

	onPageSizeChanged (pageSize) {

	}

	/** test pagination **/
	setRowData(rowData) {
		this.setState({ allOfTheData : rowData })
	}


	createNewDatasource(){
		if(!this.state.allOfTheData){
			console.log('passed');
			return;
		}

		var dataSource = {
			rowCount : this.totalRows, 														//on ne connait pas le nombre de row a l'avance
			pageSize : this.gridOptions.pageSize, 		// nombre de row par page
			getRows: (params) =>{
				//console.log(params);
				axios.get('http://127.0.0.1:6544/alerting-core/infos?ORIGIN='+this.props.routeParams.origin+'&page='+parseInt(params.endRow/this.gridOptions.pageSize)+'&per_page='+this.gridOptions.pageSize)
					.then( function (response) {
							this.setRowData(response.data);
							this.transformerCol(this.state.allOfTheData[0]);
							this.sizeToFit();

							var rowsThisPage = response.data;
							var lastRow = parseInt(response.headers['content-max']); //la on définit le nombre de row total pour l'affichage
							params.successCallback(rowsThisPage, lastRow)
					}.bind(this))
					.catch(function (err){
						params.failCallback()
						console.error(err);
					})
			}
		}

		this.gridOptions.api.setDatasource(dataSource);

	}

	/** fin test pagination **/

	componentWillReceiveProps (nextProps) {
	}
/*
  prend en entré un json
  se sert des cles ( { key : val } )
  generer les headers du tableau de la forme ( { headerNale : key , filed : key , witdh : nb_pixel })
  */

		transformerCol(JsonObjet){
				var colAutoGen = []
				for(var champ in JsonObjet){
					if( champ === 'ID' || champ ==='id')
					{
						colAutoGen.push({
							headerName : champ,
							field: champ,
							width : 30,
							filter: 'text',
	    				filterParams: {apply: true, newRowsAction: 'keep'},
	    				suppressMovable	: true
						})
					}
					else{
							colAutoGen.push({
									headerName : champ,
									field: champ,
									width : 100,
									filter: 'text',
			    				filterParams: {apply: true, newRowsAction: 'keep'},
			    				cellStyle: {
			            'white-space': 'normal',
			            'word-wrap' :'break-word'
			       			 }

									})
						}
				}
		this.setState( {dataCol : colAutoGen} )
		}

	onGridReady(params) {
		this.api = params.api
		this.columnApi = params.columnApi
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
								rowData = {this.state.allOfTheData}
								rowSelection="multiple"
								pageSize = {20}
								enableColResize="true"
								enableSorting="true"
								enableFilter="true"
								groupHeaders="true"
								rowHeight={this.state.rowHeight}
								debug="true"
								/>
						</div>
				</div>
		);
	}

}
