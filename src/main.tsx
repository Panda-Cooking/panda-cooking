import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AuthContext from './contexts/AuthContext'
import { GlobalStyle } from './styles/Global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
        <GlobalStyle />
        <App />
      </AuthContext>
    </BrowserRouter>
  </React.StrictMode>
)
