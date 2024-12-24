import style from "./Calendar.module.scss";
import { Modal } from "../../ui/Modal/Modal";
import skillbox from "../../assets/webp/box__game.webp";
import { useSelector } from "react-redux";
import { getUser } from "../../provider/StoreProvider/selectors/getUser";
import { CalendarItem } from "../../components/calendarItem/calendarItem";
import coin from "../../assets/webp/coin.webp";
import premium from "../../assets/png/premium__calendar.png";
import regular from "../../assets/webp/sliding__not__ticket.webp";
import { useTelegram } from "../../hooks/telegram/telegram";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { useRef } from "react";

import { ICalendar } from "../../types/calendarTypes";
import { useCalendar } from "../../hooks/useHooks/useCalendar";

const Calendar = ({ isOpen, onClose }: ICalendar) => {
  const user = useSelector(getUser);
  const { tg, tg_id } = useTelegram();
  const swiperRef = useRef<any>(null);

  const calendarMutation = useCalendar();

  const handleFetch = (tg_id: string) => {
    calendarMutation.mutate({ tg_id });
    onClose();
    tg.HapticFeedback.impactOccurred("medium");
  };

  const handleSlideChange = (swiper: any) => {
    const activeIndex = swiper.activeIndex;
    const activeSlide = swiper.slides[activeIndex];

    if (activeSlide.classList.contains(style.blue)) {
      swiper.slideTo(activeIndex, 300);
    }
  };

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      <div className={style.calendar__block}>
        <h1 className={style.calendar__title}>Ежедневная награда</h1>
        <Swiper
          centeredSlides={true}
          ref={swiperRef}
          className={style.calendar__list}
          spaceBetween={5}
          slidesPerView={4}
          onSlideChange={handleSlideChange}
        >
          {user?.bonus_info.map((element, index) => (
            <SwiperSlide
              className={
                user.consecutive_days === element.day
                  ? `${style.blue} ${style.calendar__item}`
                  : style.calendar__item
              }
              key={index}
            >
              <CalendarItem
                index={index}
                day={element.day}
                points={element.points}
                premium_tickets={element.premium_tickets}
                tickets={element.tickets}
                consecutive_days={user.consecutive_days}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {user?.bonus_info
          .filter((element) => element.day === user.consecutive_days)
          .map((item) => (
            <div key={item.day} className={style.calendar__info}>
              <h2 className={style.calendar__date}>{item.day} день</h2>
              <ul className={style.calendar__prize}>
                {item.points && (
                  <li className={style.calendar__bonus}>
                    <img width={32} height={32} src={coin} alt="" />
                    <span>{item.points}</span>
                  </li>
                )}
                {item.premium_tickets && (
                  <li className={style.calendar__bonus}>
                    <img width={51} height={51} src={premium} alt="" />
                    <span>{item.premium_tickets}</span>
                  </li>
                )}
                {item.tickets && (
                  <li className={style.calendar__bonus}>
                    <img width={51} height={51} src={regular} alt="" />
                    <span>{item.tickets}</span>
                  </li>
                )}
              </ul>
              <button
                onClick={() => handleFetch(tg_id)}
                className={style.calendar__button}
              >
                Забрать награду
              </button>
            </div>
          ))}

        <img src={skillbox} alt="skillbox box" />
      </div>
    </Modal>
  );
};

export default Calendar;
