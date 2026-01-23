import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'))
let seconds = 0

root.render(
  <React.StrictMode>
    <Home seconds={seconds}/>
  </React.StrictMode>,
)

setInterval(() => {
  seconds++

  root.render(
  <React.StrictMode>
    <Home seconds={seconds}/>
  </React.StrictMode>,
  )
}, 1000);

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)*/
