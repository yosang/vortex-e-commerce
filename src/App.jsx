import { Container, Divider, Navbar, NavItems, NavLink, Button, Drawer, Input, Modal, NavLogo, UserIcon, CartIcon, MenuIcon } from "@yosang/react-ui"
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import Home from './Home'
import Products from './Products'
import Brands from './Brands'

import CustomerService from './CustomerService'

import { useState } from "react"

function App() {
  const [sidebar, setSidebarOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Navbar style={{ minHeight: "70px" }}>

          <NavLink asListItem={false} onClick={() => setSidebarOpen(true)}><MenuIcon /></NavLink>

          <NavLogo tag={Link} to="/" src="https://i.imgur.com/UlFsk3d.png"></NavLogo>

          <NavItems>
            <NavLink onClick={() => setLoginOpen(true)}><UserIcon /></NavLink>
            <Divider direction="vertical" />
            <NavLink onClick={() => setCartOpen(true)}><CartIcon /></NavLink>
          </NavItems>
        </Navbar>

        <Navbar sticky={true} order="bottom">
          <NavItems>
            <NavLink tag={Link} to="/products" >Products</NavLink>
            <NavLink tag={Link} to="/brands" >Brands</NavLink>
            <NavLink>Campaigns</NavLink>
          </NavItems>
          <NavItems>
            <NavLink tag={Link} to="/customerservice" >Customer Service</NavLink>
          </NavItems>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customerservice" element={<CustomerService />} />
          <Route path="/brands" element={<Brands />} />
        </Routes>

        <Drawer isOpen={cartOpen} onClose={() => setCartOpen(false)} title="Cart">
          <p>Products in cart</p>
          <br />
          <Button onClick={() => setCartOpen(false)}>Checkout</Button>
        </Drawer>

        {/* Sidebar */}
        <Drawer side="left" isOpen={sidebar} onClose={() => setSidebarOpen(false)} title="VORTEX">
          <Container centered={false}>
            <NavLink asListItem={false} tag={Link} to="/products" onClick={() => setSidebarOpen(false)} >Products</NavLink>
            <NavLink asListItem={false} tag={Link} to="/brands" onClick={() => setSidebarOpen(false)} >Brands</NavLink>
          </Container>
        </Drawer>

        <Modal isOpen={loginOpen} onClose={() => setLoginOpen(false)} title="Login">
          <Container>
            <p>Username</p>
            <Input type="text" />
            <p>Password</p>
            <Input type="password" />
            <br />
            <Button onClick={() => setLoginOpen(false)}>Login</Button>
          </Container>
        </Modal>
      </BrowserRouter>
    </>
  )
}

export default App
