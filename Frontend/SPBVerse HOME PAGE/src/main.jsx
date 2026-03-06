import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Add the basename here! It must match your repo name */}
    <HashRouter basename="/Bank-EDP-Rr-Designning">
      <App />
    </HashRouter>
  </React.StrictMode>,
)