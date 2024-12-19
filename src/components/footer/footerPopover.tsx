import footerArrow from "../../assets/webp/footerArrow__down.webp";
import style from "./Footer.module.scss";
import { footerNavArr } from "./footerNavData";
import { FooterMenuSvg } from "../../assets/svg/FooterMenuSvg";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export const FooterPopover = () => {
  const [isOpenPopover, setIsOpenPopover] = useState(false);
  const popoverRef = useRef<HTMLUListElement>(null);

  const handleOpenPopover = () => {
    setIsOpenPopover((state) => !state);
  };

  const handleNextButtonClick = () => {
    if (popoverRef.current) {
      const scrollHeight = popoverRef.current.scrollHeight;
      const scrollTop = popoverRef.current.scrollTop;
      const clientHeight = popoverRef.current.clientHeight;

      const isAtBottom = scrollTop + clientHeight >= scrollHeight;

      if (!isAtBottom) {
        const scrollOffset = clientHeight;

        popoverRef.current.scrollBy({
          top: scrollOffset,
          behavior: "smooth",
        });
      } else {
        popoverRef.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <li className={style.upper}>
      <div className={style.popover__block}>
        {isOpenPopover && (
          <>
            <div className={style.popover__button}>
              <button
                className={style.popover__next_button}
                onClick={handleNextButtonClick}
              >
                <img
                  width={20}
                  height={27}
                  src={footerArrow}
                  alt="footerArrow"
                />
              </button>
            </div>
            <ul className={style.popover__list} ref={popoverRef}>
              {footerNavArr.map((element) => (
                <li key={element.id}>
                  <Link className={style.popover__link} to={element.path}>
                    {element.icon}
                    <span>{element.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
        <button onClick={handleOpenPopover} className={style.footer__button}>
          {isOpenPopover ? (
            <img width={20} height={25} src={footerArrow} alt="footerArrow" />
          ) : (
            <FooterMenuSvg />
          )}
        </button>
      </div>
    </li>
  );
};
