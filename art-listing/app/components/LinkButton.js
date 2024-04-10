// components/LinkButton.js
import Link from 'next/link';
import React from 'react';

const linkStyle = {
    marginRight: "20px",
    marginTop: "100px",
    textDecoration: "none",
    color: "black",
    cursor: "pointer",
    border: "2px solid black",
    borderRadius: "8px",
    fontSize: "16px",
    padding: "20px 40px",
    transition: "transform 0.3s, background-color 0.3s",
    display: "inline-block",
    backgroundColor: "white",
};



const LinkButton = ({ href, text, style, children }) => (
    <div>
        <Link href={href} passHref>
            <p style={{ ...linkStyle, ...style }}>{text}</p>
        </Link>
        {children}
    </div>
);

export default LinkButton;
