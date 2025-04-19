
import '../styles/style.css'; // ✅ FUNCIONA SEM PRECISAR DE NADA EXTRA


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
