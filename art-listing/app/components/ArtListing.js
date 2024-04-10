import Image from 'next/image';

const ArtListing = ({ imageUrl, title, author, price, date, country, description, phone }) => {
    return (
        <div className="artListingContainer" style={{
            width: '50%',
            boxSizing: 'border-box',
            padding: '20px',
            display: 'inline-block',
            verticalAlign: 'top',
        }}>
            <div className="artListing" style={{
                borderRadius: '8px',
                overflow: 'hidden',
                border: '10px solid rgba(255,255,255,100)',
                background: 'url(https://t3.ftcdn.net/jpg/04/06/60/72/360_F_406607245_daS9yMQ9g8MMZz3XWf2LVXxFy5cAdLQ7.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '100px',
            }}>
                <div className="imageWrapper" style={{
                    paddingTop: "25px",
                    borderRadius: '8px',
                    paddingLeft: "75px",


                }}>
                    <Image src={imageUrl} alt={title} width={500} height={300} objectFit="cover"
                        style=
                        {{
                            border: '5px solid rgba(0,0,0,100)',


                        }} />
                </div>

                <div className="info" style={{ padding: '20px' }}>
                    <h2 style={{ marginTop: '0', marginRight: "100px", color: "black" }}>{title}</h2>
                    <p style={{ color: "black" }}>Author: {author}</p>
                    <p style={{ color: "black" }}>Price: {price}</p>
                    <p style={{ color: "black" }}>Date: {date}</p>
                    <p style={{ color: "black" }}>Country: {country}</p>
                    <p style={{ color: "black" }}>Description: {description}</p>
                    <p style={{ color: "black" }}>Phone: {phone}</p>
                </div>
            </div>
        </div>
    );
};

export default ArtListing;
