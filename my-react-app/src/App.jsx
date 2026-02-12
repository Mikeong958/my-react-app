import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Shop from "./pages/Shop"

export default function App() {
  return (
    <div>
      <nav
        style={{
          padding: "10px 20px",
          borderBottom: "1px solid #ccc",
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  )
}
