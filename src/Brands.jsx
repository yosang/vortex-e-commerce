import { Container, NavLink } from '@yosang/react-ui'
import arcteryx from './assets/brand-arcteryx.svg'
import osprey from './assets/brand-osprey.svg'
import mammut from './assets/mammut-brand.svg'
import rab from './assets/rab-brand-logo.svg'

export default function App() {
    const brands = [arcteryx, osprey, mammut, rab];

    return (
        <Container layout='grid'>
            {brands.map(b => (
                <img src={b} />
            ))}
        </Container>
    );
}