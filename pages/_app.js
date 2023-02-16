import "../styles/globals.css";
import HamburgerMenu from "../components/HamburgerMenu";

export default function App({ Component, pageProps }) {
  return (
    <>
      <HamburgerMenu />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
