import "../styles/globals.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}
