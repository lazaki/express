import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import { loadCounts } from './actions/searchFormActions';
import { Search } from './containers/Search';
import { Login } from './containers/Login';
import 'react-toastify/dist/ReactToastify.min.css' 


const store = configureStore();
store.dispatch(loadCounts());
const history = createBrowserHistory();


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route
          path="/" component={Search}
        />
        <Route
          path="/login" component={Login}
        />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
