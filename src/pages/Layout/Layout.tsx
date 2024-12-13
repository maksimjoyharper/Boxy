import { Outlet, useLocation } from "react-router-dom";
import style from "./Layout.module.scss";
import { Header } from "../../components/header/Header";
import Calendar from "../Calendar/Calendar";
import { Footer } from "../../components/footer/Footer";
import { Onboarding } from "../../components/onboarding";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <Header />}
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
      <Calendar />
      <Onboarding />
    </>
  );
}
