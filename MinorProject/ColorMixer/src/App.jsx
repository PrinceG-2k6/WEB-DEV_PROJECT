import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const colors =JSON.parse(localStorage.getItem('color'));

  const [red,setRed] = useState(colors.red?colors.red:0);
  const [green,setGreen] = useState(colors.green?colors.green:0);
  const [blue,setBlue] = useState(colors.blue?colors.blue:0);

  

  const save=()=>{
    localStorage.setItem('color',JSON.stringify({red,green,blue}))
  }

  return (
    <>
      <div style={{
        backgroundColor:'rgb('+red+','+green+','+blue+')',
        height:'500px',
        width:'500px'
      }} className="container">

      </div>
      <form>
        <table>
          <tbody>
            <tr>
            <td><label htmlFor="red">Red : </label></td>
            <td><input type="range" id='red' value={red} onChange={(e)=>setRed(e.target.value)} min={0} max={255}/></td>
          </tr>
          <tr>
            <td><label htmlFor="green">Green : </label></td>
            <td><input type="range" id='green' value={green} onChange={(e)=>setGreen(e.target.value)} min={0} max={255}/></td>
          </tr>
          <tr>
            <td><label htmlFor="blue">Blue : </label></td>
            <td><input type="range" id='blue' value={blue} onChange={(e)=>setBlue(e.target.value)} min={0} max={255}/></td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button onClick={save}>Save Combination</button>
            </td>
          </tr>
          </tbody>
        </table>
      </form>
    </>
  )
}

export default App
