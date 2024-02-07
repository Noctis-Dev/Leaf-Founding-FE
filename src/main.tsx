import React from 'react'
import ReactDOM from 'react-dom/client'
import AppWithProviders from './App'
import './index.css'

const rootElement = document.getElementById('root')

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AppWithProviders />
    </React.StrictMode>,
  )
} else {
  console.error("No se pudo encontrar el elemento con id 'root'")
}
