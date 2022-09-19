import { Route, BrowserRouter, Routes } from "react-router-dom"

import Game from "./pages/Game"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
