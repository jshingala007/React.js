import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login"
import  Deshboard  from "./Deshboard";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/deshboard' element={<Deshboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
