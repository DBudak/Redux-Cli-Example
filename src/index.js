//Basic React
import React from 'react';
import ReactDOM from 'react-dom';

//Container
import App from './containers/App';

//Components for routing
import Dummy from './components/Dummy';
import DummyLinked from './components/DummyLinked'

//Routing
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, {history} from './store';

//Router
const router = (
  <Provider store={store}>
    <Router histroy={history}>
      <Route path='/' cpmponent={App}>
          <IndexRoute component={Dummy}></IndexRoute>
          <Route path='/dummy/:dummy-data' component={DummyLinked}></Route>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
