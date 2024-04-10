export default function Footer() {
    return (
        <footer style={{ ...styles.footer, backgroundColor: 'white', color: 'black' }}>
            <div style={styles.container}>
                <div style={styles.content}>
                    <p style={styles.text}>© {new Date().getFullYear()} ArtSpot. All rights reserved.</p>
                    <p style={styles.text}>Follow us on social media!</p>
                </div>
                <div style={styles.socialLinks}>
                    <a href="https://facebook.com" style={{ ...styles.link, color: 'black' }}>Facebook</a>
                    <a href="https://instagram.com" style={{ ...styles.link, color: 'black' }}>Instagram</a>
                    <a href="https://twitter.com" style={{ ...styles.link, color: 'black' }}>Twitter</a>
                </div>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#000',
        color: '#0070f3',
        padding: '20px',
        marginTop: '20px',
        textAlign: 'center',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    content: {
        marginBottom: '20px',
    },
    text: {
        margin: '5px 0',
    },
    socialLinks: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
    },
    link: {
        color: '#0070f3',
        textDecoration: 'none',
    },
};
