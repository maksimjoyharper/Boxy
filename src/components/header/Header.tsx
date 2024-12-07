import style from "./Header.module.scss";
import logo from "../../assets/webp/logo.webp";
import avatar from "../../assets/webp/avatar.png";
import { HeaderCoinSvg } from "../../assets/svg/HeaderCoinSvg";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../api/fetchUser/fetchUser";
import { useTelegram } from "../../hooks/telegram/telegram";
import { queryClient } from "../../api/queryClient";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../provider/StoreProvider/slice/userSlice";

export const Header = () => {
  const { tg_id, userName } = useTelegram();
  const dispatch = useDispatch();

  const { data: user } = useQuery(
    {
      queryFn: () => fetchUser(tg_id, userName),
      queryKey: ["user"],
    },
    queryClient
  );

  useEffect(() => {
    if (user) {
      dispatch(userActions.addUserStore(user));
    }
  }, [dispatch, user]);

  return (
    <header>
      <ul className={style.header__list}>
        <li>
          <img src={avatar} alt="avatar" />
          <span>{user?.name}</span>
        </li>
        <li>
          <img src={logo} alt="logo" />
        </li>
        <li className={style.reverse}>
          <span>{user?.points_all}</span>
          <HeaderCoinSvg />
        </li>
      </ul>
    </header>
  );
};
