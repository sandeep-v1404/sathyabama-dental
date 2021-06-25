import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from "./theme"

import { Provider } from 'react-redux'
import store from './store'
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"

ReactDOM.render(
  <Provider store={store} >
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);
