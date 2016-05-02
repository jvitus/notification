#Synthese

La configuration des routes permet de dire au routeur comment faire le lien entre l'url demandé et le code a exécuter
dans le cas de React :

import React from 'react'
import ReactDOM from 'react-dom'
import routes from './config/routes.jsx'
import {Router, browserHistory} from 'react-router'

ReactDOM.render(<Router history={browserHistory} routes={routes} />,
root);

initialise le router avec deux props history et routes :
 * history il peut y en avoir 3 types :
  * [browserHistory] (https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#browserhistory) est celui recommandé d'aprés la doc officielle pour les applications sur navigateurs
  * [hashHistory] (https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#hashhistory)
  * [createMemoryHistory] (https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#creatememoryhistory)

* routes la configuration des routes :


 import GenGrille from '../grid/GenGrille.jsx'
 import Vignettes from '../components/Vignettes.jsx'
 import Details from '../components/Details.jsx'
 import App from '../components/app.jsx'
 import NotFound from '../components/NotFound.jsx'
 
 const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Vignettes },
  childRoutes: [
    { path: 'infos/:origin', component: GenGrille },
    { path: 'infos/:origin/:id' , component : Details },
    { path: '\*' , component : NotFound }
  ]
 }
 
 module.exports = routes;
