export default function ImageGallery({ format, title }) {
  const images = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <main className="container">
      <h1>{title}</h1>

      <p>
        Testing image loading performance using {format.toUpperCase()}.
      </p>

      <div className="image-grid">
        {images.map((number) => (
          <div className="image-card" key={number}>
            <img
              src={`/images/${format}/image${number}.${format}`}
              alt={`Test image ${number}`}
              width="800"
              height="600"
              loading="eager"
              decoding="async"
            />
            <p>Image {number}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
