import React from 'react'
import reactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './App'
import onBoarding from './reducers/onboarding'
import registerServiceWorker from './registerServiceWorker'

injectTapEventPlugin()

let store = createStore(onBoarding)
store.subscribe(() => console.log(store.getState()))

reactDom.render((
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root'));
registerServiceWorker();
