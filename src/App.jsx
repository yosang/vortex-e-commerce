import { Container, Divider, Navbar, NavItems, NavLink, MenuIcon, Button } from "@yosang/react-ui"
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import Contact from './Contact'
import About from './About'
import Home from './Home'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar sticky={true} style={{ height: "70px"} } border="bottom" >
          <p>Logo</p>
        <NavItems>
          <NavLink tag={"a"} href="/" >Home</NavLink>
          <NavLink tag={Link} to="/about">About</NavLink>
          <NavLink tag={Link} to="/contact">Contact</NavLink>
          <Divider direction="vertical"/>
          <MenuIcon />
        </NavItems>
      </Navbar>
      <Container style={{ width: "90%", margin: "auto"}} centered={true}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
    </>
  )
}

export default App
