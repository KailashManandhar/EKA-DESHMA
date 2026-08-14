import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Read from "./pages/Read"
import Upload from "./pages/Upload"
import Navbar from "../components/Navbar"
function App() {
  return (<BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/read" element={<Read />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
