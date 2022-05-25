import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Card from "./card"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Card img="https://reactjs.org/logo-og.png" title="Deneme" description="selam bu benim ilk card componentim"/>
  </React.StrictMode>,
  document.getElementById('root')
)
