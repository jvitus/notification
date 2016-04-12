import React from 'react';
import {render} from 'react-dom';


import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './redux/reducers'
import App from './redux/components/App'

let store = createStore(todoApp)


render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
	)

/*class App extends React.Component {
 render () {
    return (
      <div>
        <p> Hello React!</p>
        <AwesomeComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));*/