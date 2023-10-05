import "@/styles/globals.css";
import DrawerAppBar from "../../components/navbar/navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DrawerAppBar />
      <Component {...pageProps} />
    </>
  );
}
