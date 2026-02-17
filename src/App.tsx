
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Products from "./pages/Products"
import Contact from "./pages/Contact"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="nosotros" element={<About />} />
        <Route path="galeria" element={<Gallery />} />
        <Route path="productos" element={<Products />} />
        <Route path="contacto" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
