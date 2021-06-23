import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from "./theme"

import { Provider } from 'react-redux'
import store from './store'

import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}

ReactDOM.render(
  <Provider store={store} >
    <ChakraProvider>
      <AlertProvider template={AlertTemplate} {...options}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </AlertProvider>
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);
