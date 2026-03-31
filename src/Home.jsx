import { ProductCard, Container } from '@yosang/react-ui'

export default function App () {
    const data = [
        { 
            image:"https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title:"VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2 700",
            discount: "25"
        },
        { 
            image:"https://www.fjellsport.no/assets/blobs/jq4441-1-footwear-photography-side-lateral-center-view-white-1e99ef5095.jpeg?preset=medium",
            title:"Adidas Adizero",
            description: "Evo Sl Woven",
            price: "1 749",
            discount: "25"
        },
        { 
            image:"https://www.fjellsport.no/assets/blobs/s21070-141-1-0b3c7ef798.jpeg?preset=medium",
            title:"Saucony Endorphin",
            description: "Azura M Sage/laurel",
            price: "2 000",
            discount: "25"
        },
        { 
            image:"https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title:"VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700",
            discount: "25"
        }
    ]
    return (
        <>
        <Container style={{ width: "80%", margin: "auto"}} centered={true}>
        <video
            src="https://cdn.jumpshare.com/preview/gRWiHgcGHQA_L90A_28rUwl244jROwYmlu9lzxcy8S5VP3AQSPz2U9EupbfElYMQgH8og0a99jYUDe5Mz6b0NR_-BMMe_-VmMnFquZua754171UBOQvLOiAKbaIZ-SvWwpjCRp12Y-gfClUOQokSNG6yjbN-I2pg_cnoHs_AmgI.mp4"  // or an external URL
            autoPlay
            loop       // loops the video continuously
            muted      // must be muted to autoplay on most browsers
            playsInline // ensures autoplay works on mobile Safari
            style={{ width: "100%", height: "450px", objectFit: "cover" }} // responsive
        />
        </Container>
        <Container layout="grid" style={{ width: "80%", margin: "auto"}} centered={true}>
            {data.map(p => (
                <ProductCard discount={p.discount} image={p.image} title={p.title} description={p.description} price={p.price} />
            ))}
        </Container>
        </>
    )
}