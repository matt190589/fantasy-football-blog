import "../styles/globals.css";
import HamburgerMenu from "../components/HamburgerMenu";

export default function App({ Component, pageProps }) {
  return (
    <>
      <HamburgerMenu />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}
