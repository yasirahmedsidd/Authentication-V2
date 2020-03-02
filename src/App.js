import React from 'react';
import Nav from './navigation/MainNavigation';

import configureStore from './redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={configureStore}>
      <Nav />
    </Provider>
  );
};

export default App;
