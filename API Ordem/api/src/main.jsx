import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Header/Header.jsx'
import Definition from './Definition/Definition.jsx'
import Footer from './Rodape/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Header />
        <Definition />
        <Footer />
  </React.StrictMode>,
)
