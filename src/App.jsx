import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './common/Header'

import Navb from './common/nav'
import Cards from './common/Cards'
import Foot from './common/Footer'

// function App() {
//   return (
//     <>
//     <h1>Apps page</h1>
//     </>
//   )
   
// }

class App extends React.Component{
  render(){
    return(
      <>
      <Header />
      <Navb />
      <Cards />
      <Foot />
      </>
    )
  }
}

export default App
