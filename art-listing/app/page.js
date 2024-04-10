import LinkButton from './components/LinkButton';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h1>Welcome to ArtSpot!</h1>
        <p>Discover and collect beautiful art from talented artists around the world.</p>
        <div style={{ marginTop: "20px" }}>
          {/* Use LinkButton for navigation */}
          <LinkButton href="/browse" text="Browse Art" style={{ marginRight: "10px" }} />
          <LinkButton href="/about-us" text="About Us" style={{ marginRight: "10px" }} />
          <div style={{ marginTop: "300px" }}>
            <Footer />

          </div>
        </div>
      </main>
    </>
  );
}
