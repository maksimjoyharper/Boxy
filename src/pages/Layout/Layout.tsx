import { Outlet } from "react-router-dom";
import style from "./Layout.module.scss";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

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
