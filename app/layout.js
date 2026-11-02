
import "./globals.css";

export const metadata = {
  title: "Image Format Performance Test",
  description: "Comparing JPG, WebP and AVIF image loading performance."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
