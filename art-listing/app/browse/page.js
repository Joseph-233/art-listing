
import ArtListing from '../components/ArtListing';
import Link from 'next/link';
import { HiArrowNarrowLeft } from "react-icons/hi";
import Footer from '../components/Footer';
import LinkButton from '../components/LinkButton';
import { FaPlus } from "react-icons/fa";

const Home = () => {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link href="/" style={{ marginRight: '10px' }}>
                    <p><HiArrowNarrowLeft size={40} /></p>
                </Link>
                <LinkButton href="/browse" text="+ Add a listing" style={{ marginLeft: "1100px" }} />
            </div>
            <h1 style={{ alignContent: "center", marginLeft: "650px" }}>Art Listings</h1>
            <ArtListing
                imageUrl="/pic1.png"
                title="Art Title"
                author="Artist Name"
                price="$100"
                date="2023-04-10"
                country="Country Name"
                description="This is a description of the art."
                phone="1234567890"
            />
            <ArtListing
                imageUrl="/pic2.png"
                title="Art Title"
                author="Artist Name"
                price="$100"
                date="2023-04-10"
                country="Country Name"
                description="This is a description of the art."
            />
            <ArtListing
                imageUrl="/path/to/art.jpg" // Replace with your image path
                title="Art Title"
                author="Artist Name"
                price="$100"
                date="2023-04-10"
                country="Country Name"
                description="This is a description of the art."
            />
            <Footer />
        </div>

    );
};

export default Home;
