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

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    true ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route
          path="/login" component={Login}
        />
        <PrivateRoute path="/" component={Search}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

