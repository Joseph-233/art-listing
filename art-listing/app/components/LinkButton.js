// components/LinkButton.js
import Link from 'next/link';
import React from 'react';

const linkStyle = {
    marginRight: "20px",
    marginTop: "100px",
    textDecoration: "none", // Removes the underline
    color: "blue",
    cursor: "pointer",
    border: "2px solid blue", // Adds a yellow border, adjust thickness as needed
    borderRadius: "8px", // Gives the border rounded corners
    fontSize: "16px",
    padding: "20px 40px", // Adds some padding inside the border
    transition: "transform 0.3s, background-color 0.3s", // Animates both background color and transform properties
    display: "inline-block", // Ensures padding and border are applied correctly
    backgroundColor: "white", // Starting background color
};

const hoverStyle = {
    transform: "translateY(-10px)", // Creates a floating effect by moving the button up on hover
    backgroundColor: "black", // Changes background color on hover for a cool effect
};


const LinkButton = ({ href, text, style }) => (
    <Link href={href} passHref>
        <p style={{ ...linkStyle, ...style }}>{text}</p>
    </Link>
);

export default LinkButton;
