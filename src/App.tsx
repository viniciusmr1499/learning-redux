import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Catalog from './components/Catalog';

const App: React.FC = () => {
 return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
}

export default App;
