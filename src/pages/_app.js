import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="flex h-full">
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
