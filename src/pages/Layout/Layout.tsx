import { Outlet, useLocation } from "react-router-dom";
import style from "./Layout.module.scss";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { getUser } from "../../provider/StoreProvider/selectors/getUser";
// import Calendar from "../Calendar/Calendar";

export default function Layout() {
  const location = useLocation();
  // const [isOpen, setIsOpen] = useState(true);
  // const user = useSelector(getUser);

  // useEffect(() => {
  //   if (user?.login_today) {
  //     setIsOpen(false);
  //   }
  // }, [isOpen, user?.login_today]);

  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  return (
    <div className={location.pathname !== "/" ? "app bg" : "app"}>
      {location.pathname === "/" && <Header />}
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
      {/* <Calendar isOpen={isOpen} onClose={handleClose} /> */}
      {/* <Onboarding /> */}
    </div>
  );
}
