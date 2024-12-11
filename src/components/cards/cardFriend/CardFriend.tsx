import { fetchFriendsProps } from "../../../api/fetchFriends/fetchFriends";
import style from "./CardFriend.module.css";

type CardFriendProps = {
  friends: fetchFriendsProps;
};

export default function CardFriend({ friends }: CardFriendProps) {
  return (
    <li className={style.friends__item}>
      <span className={style.friends__position}>1</span>
      <img className={style.friends__avatar} src="avatar" alt="avatar" />
      <div className={style.friends__info}>
        <p className={style.friends__name}>{friends?.name}</p>
        <p className={style.friends__coins}>{friends?.points}</p>
      </div>
      <button className={style.friends__button}>Забрать награду</button>
    </li>
  );
}
