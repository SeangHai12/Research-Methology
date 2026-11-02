
export default function Home() {
  return (
    <main className="container">
      <h1>Image Format Performance Test</h1>

      <p>
        Compare image loading performance between
        JPG, WebP and AVIF.
      </p>

      <div className="image-grid">
        <a href="/jpg" className="image-card">
          <h2>JPG Test</h2>
          <p>Test JPEG image loading.</p>
        </a>

        <a href="/webp" className="image-card">
          <h2>WebP Test</h2>
          <p>Test WebP image loading.</p>
        </a>

        <a href="/avif" className="image-card">
          <h2>AVIF Test</h2>
          <p>Test AVIF image loading.</p>
        </a>
      </div>
    </main>
  );
}
