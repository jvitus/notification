var React = require('react');

require("!style!css!less!../assets/general.less");
require("!style!css!less!../assets/detail.less");

import {AgGridReact} from 'ag-grid-react';
import axios from 'axios';


	function StringifyData(parametreastringifier, nomdata)
	{
		if(parametreastringifier==null)
			return("La donnée "+nomdata+" N'est pas renseignée pour cette alerte.")
		else
			return(parametreastringifier+"")
	}


export default class Details extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			dataRow : []
		}
	}

	componentDidMount() {

		let dataResponse = []
		axios.get('http://127.0.0.1:6544/alerting-core/infos/'+this.props.routeParams.id )
			.then( function (response) {
				console.log('TEST AXIOS')
				console.log(response)
				console.log(response.data)
					this.setState ( {dataRow : response.data  } )
			}.bind(this))
			.catch(function (response){
					console.log(response)
				})
	}

//Faire la jointuire pour obtenir type

	render () {
		

		function classString(detaildata, nomdata)
		{
			if(nomdata === "lvl")
			{
				var locClassString;
				if (detaildata === null)
				{
					locClassString = "row titleLine "+nomdata+0;
				}
				else
				{
					locClassString = "row titleLine "+nomdata+detaildata;
				}
			}
			else
			{
				if(detaildata === null)
				{
					locClassString = "row noData";
				}
				else
				{
					locClassString = "row "+nomdata;
				}
			}
			return locClassString
		}

		return (
				<body className="container detail">
					<div className="row">
						<div className="col-lg-12">
							<span className="numero">N° {this.state.dataRow.ID}</span>
						</div>
					</div>					
					<div className={classString(this.state.dataRow.Niveau,"lvl")}>
						<div className="col-lg-6">
						<h2>{this.state.dataRow.Nom}</h2>
						</div>
						<div className="col-lg-6">
							<div className="row">
								<div className="col-lg-3 type">
									<p>{this.state.dataRow.NomType}</p>

									<p><span className={'icon '+this.state.dataRow.Icone}></span></p>
								</div>
								<div className="col-lg-3 nameApp">
									<p>{StringifyData(this.state.dataRow.Application, "Application")}</p>
								</div>
								<div className="col-lg-3 comportement">
									<p>{StringifyData(this.state.dataRow.Comportement, "Comportement")}</p>
								</div>
								<div className="col-lg-3 date">
									<p>{this.state.dataRow.Date}</p>
								</div>
							</div>
						</div>
					</div>

				{/*<div className="row">
					<div className="col-lg-12">
						<p>{StringifyData(this.state.dataRow.Comportement, "Comportement")}</p>
					</div>
				</div>*/}

					<div className='row queryZone'>
						<div className='col-lg-12'>


						<div className={classString(this.state.dataRow.Requete,"requete")}>
							<div className="col-lg-12">
								<h4>Requête :</h4>
							</div>
							<div className="col-lg-12">
								<p>{StringifyData(this.state.dataRow.Requete, "Requete")}</p>
							</div>
						</div>

						  {				  
						  this.state.dataRow.RequeteCorrection != null
						  ? console.log('Pas de requete de correction dans la DB')
						  : 
						  <div className={classString(this.state.dataRow.Requete,"requeteCorrection")}>
								<div className="col-lg-12">
									<h4>Requête de correction :</h4>
								</div>
								<div className="col-lg-12">
									<p>{StringifyData(this.state.dataRow.RequeteCorrection, "Requete de Correction")}</p>						
								</div>
							</div>
							}

						</div>
					</div>

			</body>
		);
	}

}
