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
			rowHeight : 30
		}
		 this.transformerCol = this.transformerCol.bind(this)
		 this.sizeToFit = this.sizeToFit.bind(this)

		this.gridOptions = {
		// this is how you listen for events using gridOptions
			onModelUpdated () {
			  console.log('event onModelUpdated received');
			},
			rowHeight: 30,
			rowModelType: 'pagination',
			onRowClicked: (row) => {
						/*quand on clique sur une ligne
						on veut attaquer l'API avec l'id de la ligne en question
						pour afficher les details
						*/
				browserHistory.push("/infos/"+this.props.routeParams.origin+"/"+row.data.ID)
			},
			// this is a simple property
			rowBuffer: 10, // no need to set this, the default is fine for almost all scenarios
			enableFilter : false
		}


	}



	onQuickFilterText(event) {
		console.log("filtre :"+event.target.value)
		this.setState({quickFilterText: event.target.value});
	}

	sizeToFit(e) {
    this.gridOptions.api.sizeColumnsToFit();
	}

	onPageSizeChanged (pageSize) {
		this.state.pageSize = new Number(pageSize);
		console.log("page size blablabal")
		createNewDatasource();
	}


	componentDidMount() {
		window.addEventListener('resize', this.sizeToFit);
		  	let dataResponse = []

		axios.get('http://127.0.0.1:6544/alerting-core/infos?ORIGIN='+this.props.routeParams.origin+'&page=1&per_page=20' )
		.then( function (response) {
				this.setState ( {dataRow : response.data  } )
				console.log("avant transform")
				console.log(this.state.dataRow[0])
				console.log(response.data[0])
				this.setState({rowHeight : 30})
				this.transformerCol(this.state.dataRow[0])
				this.sizeToFit()
		}.bind(this))
		.catch(function (response){
				console.log(response)
			})
		console.log("ON rappel")

		}

	componentWillReceiveProps (nextProps) {
  	console.log("on a actualisé la props youhouuuuu"+nextProps.origin)

  	console.log("le super historique est " +this.props.routeParams.origin)
  	console.log("LA SUPER ID  " +this.props.routeParams.id)
	}
/*
  prend en entré un json
  se sert des cles ( { key : val } )
  generer les headers du tableau de la forme ( { headerNale : key , filed : key , witdh : nb_pixel })
  */

		transformerCol(JsonObjet){
				var colAutoGen = []
				console.log(JsonObjet)
				for(var champ in JsonObjet){
					console.log("champ :" , champ)
					if( champ === 'ID' || champ ==='id')
					{
						console.log("on va mettre le champ id")
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
		this.api = params.api;
		this.columnApi = params.columnApi;
	}


	render () {
		console.log("le param est :" +this.props.routeParams.origin)
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
