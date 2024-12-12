import { useMutation } from "@tanstack/react-query";
import {
  fetchFriendsProps,
  getBonusOfRef,
} from "../../../api/fetchFriends/fetchFriends";
import style from "./CardFriend.module.css";
import { queryClient } from "../../../api/queryClient";
import { useTelegram } from "../../../hooks/telegram/telegram";
import { formatDate } from "../../../features/formateDate";
import avatar from "../../../assets/png/avatar.png";
import { HeaderCoinSvg } from "../../../assets/svg/HeaderCoinSvg";

type CardFriendProps = {
  friends: fetchFriendsProps;
  index: number;
};

export default function CardFriend({ friends, index }: CardFriendProps) {
  const { tg, tg_id } = useTelegram();
  const getPrize = useMutation(
    {
      mutationFn: (data: { tg_id: string; new_player_id: string }) =>
        getBonusOfRef(data.tg_id, data.new_player_id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["friends"] });
      },
      onError: (data) => {
        console.log(data);
      },
    },
    queryClient
  );

  const onClick = () => {
    // if (isModalError) {
    getPrize.mutate({
      tg_id: tg_id,
      new_player_id: friends.tg_id,
    });
    // }
    // setIsVisionModalPrize(true);

    tg.HapticFeedback.impactOccurred("light");
  };

  return (
    <li className={style.friends__item}>
      <span className={style.friends__position}>{index + 1}</span>
      <img className={style.friends__avatar} src={avatar} alt="avatar" />
      <div className={style.friends__info}>
        <p className={style.friends__name}>{friends?.name}</p>
        <div className={style.icon_coin}>
          <HeaderCoinSvg width="12" height="12" />
          <p className={style.friends__coins}>{friends?.points}</p>
        </div>
      </div>
      {friends.referral_bonus ? (
        <button onClick={onClick} className={style.friends__button}>
          Забрать награду
        </button>
      ) : (
        <span className={style.friends_reg_data}>
          Приглашён {formatDate(friends.reg_data)}
        </span>
      )}
    </li>
  );
}
