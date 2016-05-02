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
    { path: '*' , component : NotFound }
  ]
}

module.exports = routes;
