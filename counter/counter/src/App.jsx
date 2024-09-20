import { useState } from "react"



function App() {

  const [count,setCount]=useState(0)

  return (
    <>
    <div align="center" style={{margin:"200px 0"}}>
      <h1>Counter</h1>
      <h2 style={{fontSize:"37px"}}>{count}</h2>
      <button onClick={()=> setCount(count + 1)} style={{margin:"10px"}}>+</button>
      <button onClick={()=>setCount(0)} style={{margin:"10px"}}>RESET</button>
      <button onClick={()=> setCount(count - 1)} style={{margin:"10px"}}>-</button>
    </div>
    
    </>
  )
}

export default App
