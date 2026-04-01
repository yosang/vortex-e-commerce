import { ProductCard, Container, Hero } from '@yosang/react-ui'

export default function App() {
    const data = [
        {
            image: "https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title: "VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2 700",
            discount: "25"
        },
        {
            image: "https://www.fjellsport.no/assets/blobs/jq4441-1-footwear-photography-side-lateral-center-view-white-1e99ef5095.jpeg?preset=medium",
            title: "Adidas Adizero",
            description: "Evo Sl Woven",
            price: "1 749",
            discount: "25"
        },
        {
            image: "https://www.fjellsport.no/assets/blobs/s21070-141-1-0b3c7ef798.jpeg?preset=medium",
            title: "Saucony Endorphin",
            description: "Azura M Sage/laurel",
            price: "2 000",
            discount: "25"
        },
        {
            image: "https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title: "VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700",
            discount: "25"
        }
    ]
    return (
        <>
            <Hero style={{ minHeight: "80vh" }} type='image' src='https://i.imgur.com/GaRFfu9.jpeg'>
                <p>QUALITY SPORTS WEAR</p>
                <h1>Now is the time...</h1>
                <h3>to push your limits!</h3>
            </Hero>
            <Container layout="grid" style={{ width: "80%", margin: "auto" }} centered={true}>
                {data.map(p => (
                    <ProductCard discount={p.discount} image={p.image} title={p.title} description={p.description} price={p.price} />
                ))}
            </Container>
        </>
    )
}