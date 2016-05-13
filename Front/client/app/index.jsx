import React from 'react'
import ReactDOM from 'react-dom'
import routes from './config/routes.jsx'
import {Router, browserHistory} from 'react-router'


import 'ag-grid-root/dist/styles/ag-grid.css'
import 'ag-grid-root/dist/styles/theme-blue.css'

const root = document.getElementById('root');



ReactDOM.render(<Router history={browserHistory} routes={routes} />,
root)
