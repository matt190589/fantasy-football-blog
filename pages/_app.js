import "../styles/globals.css";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main classNme="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}
