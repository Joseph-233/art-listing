// Import the necessary Head component from next/head for setting the page title
import Head from 'next/head';
// Import the CSS module for styling
import styles from './about-us.module.css';
import Footer from '../components/Footer'; // Assuming you have a Footer component

// Define the About component
export default function About() {
  return (
    <>
      <Head>
        <title>About Us | ArtSpot</title>
      </Head>

      <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>
        <div className={styles.descriptionContainer}>
        <p>
  Welcome to ArtSpot, the premier destination for art enthusiasts and creators from all corners of the globe. Our mission is to foster a vibrant community where artists can showcase their unique talents and art lovers can discover and appreciate new artworks. With ArtSpot, you can explore a vast collection of paintings, sculptures, photographs, and digital art pieces, each telling its own story and evoking emotions.

  <br /><br />

  Our platform is designed with the artist and art aficionado in mind, featuring user-friendly navigation, high-quality image uploads, and interactive elements that allow for direct engagement between artists and the community. Highlights include virtual galleries, artist portfolios, art challenges, and educational resources for both budding and seasoned artists. Whether you're here to find your next masterpiece, connect with like-minded individuals, or simply explore the world of art, ArtSpot offers an enriching and immersive experience.

  <br /><br />

  Join us at ArtSpot, where art comes to life and the possibilities are endless. Discover. Connect. Create.
</p>

        </div>
      </div>
      <div style={{paddingTop: '150px'}}>
      <Footer />
      </div>
      
      {/* Assuming you will include the logo section inside your Footer component */}
      <div className={styles.logoSection}>
        {/* Inline SVG for logo1 */}
        <div className={styles.logo} dangerouslySetInnerHTML={{ __html: `
          <!-- Insert SVG markup for logo1 here -->
        ` }} />

        {/* Inline SVG for logo2 */}
        <div className={styles.logo} dangerouslySetInnerHTML={{ __html: `
          <!-- Insert SVG markup for logo2 here -->
        ` }} />

        {/* Inline SVG for logo3 */}
        <div className={styles.logo} dangerouslySetInnerHTML={{ __html: `
          <!-- Insert SVG markup for logo3 here -->
        ` }} />

        {/* Inline SVG for logo4 */}
        <div className={styles.logo} dangerouslySetInnerHTML={{ __html: `
          <!-- Insert SVG markup for logo4 here -->
        ` }} />
      </div>
    </>
  );
}
