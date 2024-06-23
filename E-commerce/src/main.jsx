import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Envuelve el <App /> y hace que no usemos mas props, ya que todos los componentes hijos de App tienen a disponibilidad lo que hay en Store
import {Provider} from 'react-redux' 
// El hijo de App que quiera usar un estado global lo va a poder hacer gracias al provider
import Store from './Redux/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
