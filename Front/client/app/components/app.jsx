import React from "react"
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

export default class App extends React.Component{

	constructor(props) {
		super(props);
		this.state={
			pathUrl : []
		}
	}

	parseUrl(){
		let str = this.props.location.pathname.slice(1,this.props.location.pathname.length)
		let res = str.split("/")
		this.setState({pathUrl : res })

	}
	componentWillReceiveProps (nextProps) {
		console.log("ON A RECU UN NOUVEAU CHEMIN "+nextProps.location.pathname)
		this.parseUrl()
	}

	render(){
		return (
			<div>

				<Breadcrumb>
					<Glyphicon glyph="bell" />
					<Breadcrumb.Item href="/">
						home
					</Breadcrumb.Item>
			    <Breadcrumb.Item active>
			      {this.props.location.pathname.slice(1,this.props.location.pathname.length)}
			    </Breadcrumb.Item>
	  		</Breadcrumb>
				{this.props.children}
			</div>

			)
	}
}
