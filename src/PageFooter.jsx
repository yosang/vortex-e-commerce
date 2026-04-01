import { Container, Footer, NavItems, NavLink, FacebookLogo, InstagramLogo } from '@yosang/react-ui'

export default function App() {
    return (
        <>
        <Container centered={true} >

        <Footer style={{ width:"90%" }}>
                <NavItems direction='vertical'>
                    <h3>Company Information</h3>
                    <NavLink asListItem={false}>About us</NavLink>
                    <NavLink asListItem={false}>Our stores</NavLink>
                    <NavLink asListItem={false}>Our social responsibility</NavLink>
                    <NavLink asListItem={false}>Working at VORTEX</NavLink>
                    <NavLink asListItem={false}>Contacts</NavLink>
                    <NavLink asListItem={false}>Privacy</NavLink>
                    <NavLink asListItem={false}>Size guides</NavLink>
                </NavItems>
                <NavItems direction='vertical'>
                    <h3>Customer Service</h3>
                    <NavLink asListItem={false}>Contact us</NavLink>
                    <NavLink asListItem={false}>Shipping and delivery</NavLink>
                    <NavLink asListItem={false}>Returns and complaints</NavLink>
                    <NavLink asListItem={false}>Terms of sale</NavLink>
                    <NavLink asListItem={false}>Price match</NavLink>
                    <NavLink asListItem={false}>Cookies</NavLink>
                    <NavLink asListItem={false}>Frequently asked questions</NavLink>
                </NavItems>
                <NavItems direction='vertical'>
                    <h3>About Us</h3>
                    <NavLink asListItem={false}>About VORTEX</NavLink>
                    <NavLink asListItem={false}>Customer Club</NavLink>
                    <NavLink asListItem={false}>Membership Terms</NavLink>
                    <NavLink asListItem={false}>Job Openings</NavLink>
                    <NavLink asListItem={false}>Sustainability</NavLink>
                </NavItems>
                <NavItems direction='vertical'>
                    <h3>Social Media</h3>
                    <NavItems>
                        <NavLink asListItem={false}>
                            <FacebookLogo />
                        </NavLink>
                        <NavLink asListItem={false}>
                            <InstagramLogo />
                        </NavLink>
                    </NavItems>
                </NavItems>
            </Footer>
            <Container >
                <p>All Rights Reserved, VORTEX - 2026</p>
            </Container>
        </Container>
        </>
    )
}