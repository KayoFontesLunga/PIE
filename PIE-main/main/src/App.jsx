
import Post from "./assets/form"
import Get from "./assets/post"
import Home from "./assets/home"
import Cria from "./assets/criadores"
import Navbar from "./assets/navbar"
import Footer from "./assets/footer"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/get" element={<Get />} />
          <Route path="/criadores" element={<Cria />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App
