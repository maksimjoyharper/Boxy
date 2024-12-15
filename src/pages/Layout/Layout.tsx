import { Outlet, useLocation } from "react-router-dom";
import style from "./Layout.module.scss";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { getUser } from "../../provider/StoreProvider/selectors/getUser";
import Calendar from "../Calendar/Calendar";
import { Onboarding } from "../../components/onboarding";
import { getUrlParams } from "../../helpers/getUrlParams/getUrlParams";

interface ParamsParthnerProps {
  u: string;
  v: string;
  p: string;
}

export default function Layout() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenOnb, setIsOpenOnb] = useState(false);
  const [params, setParams] = useState<ParamsParthnerProps>();

  useEffect(() => {
    const onboardingShown = localStorage.getItem("onboardingShown");
    const { u, v, p } = getUrlParams();
    if (u && v && p) {
      localStorage.setItem("onboardingShown", "true");
    } else {
      if (!onboardingShown) {
        setIsOpenOnb(true);
      }
    }
  }, []);

  const handleStartClick = () => {
    localStorage.setItem("onboardingShown", "true");
    setIsOpenOnb(false);
  };

  useEffect(() => {
    const { u, v, p } = getUrlParams();
    if (u && v && p) {
      setParams({ u: u, v: v, p: p });
    }
  }, []);

  // const user = useSelector(getUser);

  // useEffect(() => {
  //   if (user?.login_today) {
  //     setIsOpen(false);
  //   }
  // }, [isOpen, user?.login_today]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={location.pathname !== "/" ? "app bg" : "app"}>
      {location.pathname === "/" && <Header />}
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
      <Calendar isOpen={isOpen} onClose={handleClose} />
      <Onboarding onClose={handleStartClick} isOpen={isOpenOnb} />
    </div>
  );
}
