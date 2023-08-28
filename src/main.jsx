import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/app/App'
import './index.css'
import { ProviderProducts } from './Context/Products'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderProducts>
      <App />
    </ProviderProducts>
  </React.StrictMode>,
)
