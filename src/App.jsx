import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import ProfileCard from './ProfileCard'
// import Todo from './Todo';
// import GridView from '../GridView'
import Navbar from '../Navbar'

function App() {
  const [count, setCount] = useState()
 
  return (
    <>
      
      <h1>Grid View</h1>
      {/* <Todo/> */}
      {/* <ProfileCard/> */}
      {/* <GridView/> */}
      <Navbar/>
      
    </>
  )
}

export default App
