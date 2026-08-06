import "./globals.css";
import SpaceBackground from "./components/SpaceBackground";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "HyperXion",
  description:
    "HyperXion explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="dark">
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <SpaceBackground />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
