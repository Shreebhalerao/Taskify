import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from './reducer/index.js'
import { Toaster } from 'react-hot-toast'
import { ChakraProvider } from "@chakra-ui/react"

const store = configureStore({
  reducer: rootReducer
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider>
        <React.StrictMode>
          <App />
          <Toaster />
        </React.StrictMode>
      </ChakraProvider>
    </Provider>
  </BrowserRouter >
)
