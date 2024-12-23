import { Outlet, useLocation } from "react-router-dom";
import style from "./Layout.module.scss";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../provider/StoreProvider/selectors/getUser";
import Calendar from "../Calendar/Calendar";
import { Onboarding } from "../../components/onboarding";
import { useTelegram } from "../../hooks/telegram/telegram";

export default function Layout() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenOnb, setIsOpenOnb] = useState(false);
  const user = useSelector(getUser);
  const { tg } = useTelegram();
  useEffect(() => {
    if (user?.instruction) {
      setIsOpenOnb(true);
    }
  }, [user]);

  useEffect(() => {
    if (user?.login_today === false) {
      setIsOpen(true);
    }
  }, [user]);

  const handleClose = () => {
    tg.HapticFeedback.impactOccurred("light");
    setIsOpen(false);
  };

  const handleCloseOnb = () => {
    tg.HapticFeedback.impactOccurred("light");
    setIsOpenOnb(false);
  };

  return (
    <div className={location.pathname !== "/" ? "app bg" : "app"}>
      {location.pathname === "/" && <Header />}
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
      <Calendar isOpen={isOpen} onClose={handleClose} />
      <Onboarding onClose={handleCloseOnb} isOpen={isOpenOnb} />
    </div>
  );
}
