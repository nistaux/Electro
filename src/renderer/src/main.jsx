// Importing React Stuff
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

// Importing Redux Stuff
import store from './store'

// Importing My Stuff
import App from './App'

// Importing CSS
import './assets/main.css'

//<Route path='/' element={<RedirectHome />} />
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
