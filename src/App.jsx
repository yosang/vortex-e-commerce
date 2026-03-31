import { Container, Divider, Navbar, NavItems, NavLink, Button, Drawer, Input, Modal } from "@yosang/react-ui"
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import Home from './Home'
import Products from './Products'

import CustomerService from './CustomerService'

import { useState } from "react"

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <>
    <BrowserRouter>
      <Navbar sticky={true} style={{minHeight: "70px"}}>

        <NavLink asListItem={false} tag={Link} to="/">
          <img style={ { width: "auto", height: "50px", objectFit: "contain"}} src="https://i.imgur.com/UlFsk3d.png" />
        </NavLink>
          
        <NavItems>
          <NavLink tag={Link} to="/" >Home</NavLink>
          <Divider direction="vertical"/>
          <NavLink onClick={() => setLoginOpen(true)}>Login</NavLink>
          <NavLink onClick={() => setCartOpen(true)}>Cart</NavLink>
        </NavItems>
      </Navbar>

      <Navbar sticky={true} style={{ top: "70px"}} order="bottom">
        <NavItems>
          <NavLink tag={Link} to="/products" >Products</NavLink>
          <NavLink>Brands</NavLink>
          <NavLink>Campaigns</NavLink>
        </NavItems>
        <NavItems>
          <NavLink tag={Link} to="/customerservice" >Kundeservice</NavLink>
        </NavItems>
      </Navbar>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customerservice" element={<CustomerService />} />
      </Routes>

      <Drawer isOpen={cartOpen} onClose={() => setCartOpen(false)} title="Cart">
        <p>Products in cart</p>
        <br />
        <Button onClick={() => setCartOpen(false)}>Checkout</Button>
      </Drawer>

      <Modal isOpen={loginOpen} onClose={() => setLoginOpen(false)} title="Login">
        <Container>
          <p>Username</p>
          <Input type="text" placeholder="username"/>
          <p>Password</p>
          <Input type="password" placeholder="Password"/>
          <br />
          <Button onClick={() => setLoginOpen(false)}>Login</Button>
        </Container>
      </Modal>
    </BrowserRouter>
    </>
  )
}

export default App
