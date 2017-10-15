import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import { Search } from './containers/Search';
import { Login } from './containers/Login';
import { TechnicalCharacteristicsPage } from './containers/TechnicalCharacteristicsPage';
import 'react-toastify/dist/ReactToastify.min.css'
import { App } from './containers/App';

const store = configureStore();
const history = createBrowserHistory();
const state = store.getState()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <App history={history} path="/" state={state}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

