import style from "./Friends.module.scss";
import { PageUI } from "../../ui/PageUI/PageUI";
import { useQuery } from "@tanstack/react-query";
import { fetchAllFriends } from "../../api/fetchFriends/fetchFriends";
import { useTelegram } from "../../hooks/telegram/telegram";
import { queryClient } from "../../api/queryClient";

export default function Friends() {
  const { tg_id } = useTelegram();

  const { data: friends } = useQuery(
    {
      queryKey: ["friends"],
      queryFn: () => fetchAllFriends(tg_id),
    },
    queryClient
  );

  return (
    <PageUI
      className={style.friends__section}
      className__title={style.friends__title}
      title={"Друзья"}
    >
      <div className={style.friends__invite}>
        <h2 className={style.invite__title}>Играть вместе веселее!</h2>
        <p className={style.invite__label}>
          Получай награды за каждого друга, который присоединился
        </p>
        <button className={style.invite__button}>Пригласить друга</button>
      </div>
      <ul className={style.page__list}>
        <li className={style.friends__item}>
          <span className={style.friends__position}>1</span>
          <img className={style.friends__avatar} src="avatar" alt="avatar" />
          <div className={style.friends__info}>
            <p className={style.friends__name}>{friends?.name}</p>
            <p className={style.friends__coins}>{friends?.points}</p>
          </div>
          <button className={style.friends__button}>Забрать награду</button>
        </li>
      </ul>
    </PageUI>
  );
}
