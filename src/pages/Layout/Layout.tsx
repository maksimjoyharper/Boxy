import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/Header";
import style from "./Layout.module.scss";
import { Footer } from "../../components/footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
