import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [red,setRed] = useState(0);
  const [green,setGreen] = useState(0);
  const [blue,setBlue] = useState(0);

  const handleRed =(value)=>{
    setRed(value)
  }
  const handleGreen =(value)=>{
    setGreen(value)
  }
  const handleBlue =(value)=>{
    setBlue(value)
  }

  return (
    <>
      <div style={{
        backgroundColor:'rgb(0,255,0)',
        height:'500px',
        width:'500px'
      }} className="container">

      </div>
      <form action="">
        <table>
          <tr>
            <td><label htmlFor="red">Red : </label></td>
            <td><input type="range" id='red' defaultValue={0} min={0} max={255}/></td>
          </tr>
          <tr>
            <td><label htmlFor="green">Green : </label></td>
            <td><input type="range" id='green' defaultValue={0} min={0} max={255}/></td>
          </tr>
          <tr>
            <td><label htmlFor="blue">Blue : </label></td>
            <td><input type="range" id='blue' defaultValue={0} min={0} max={255}/></td>
          </tr>
        </table>
      </form>
    </>
  )
}

export default App
