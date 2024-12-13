import style from "./Header.module.scss";
import logo from "../../assets/webp/logo.webp";
import avatar from "../../assets/webp/avatar.png";
import { HeaderCoinSvg } from "../../assets/svg/HeaderCoinSvg";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../api/fetchUser/fetchUser";
import { useTelegram } from "../../hooks/telegram/telegram";
import { queryClient } from "../../api/queryClient";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../provider/StoreProvider/slice/userSlice";
import { useLocation } from "react-router-dom";
import { getFriend } from "../../api/fetchFriends/fetchFriends";
import { fetchUserProps } from "../../types/userType";

export const Header = () => {
  const { tg_id, userName } = useTelegram();
  const dispatch = useDispatch();
  const params = new URLSearchParams(useLocation().search);
  const paramIdFriend = params.get("id");
  const [referral_id, setReferral_id] = useState<string>();
  const [userInfo, setUserInfo] = useState<fetchUserProps>();

  const { data: user } = useQuery(
    {
      queryFn: () => fetchUser(tg_id, userName),
      queryKey: ["user"],
      enabled: !paramIdFriend && !!tg_id,
    },
    queryClient
  );

  const { data: firstUser } = useQuery(
    {
      queryKey: ["addFriend"],
      queryFn: () => getFriend(tg_id, userName, referral_id),
      enabled: !!referral_id && !!tg_id,
    },
    queryClient
  );

  useEffect(() => {
    if (user) {
      dispatch(userActions.addUserStore(user));
      setUserInfo(user);
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (firstUser) {
      dispatch(userActions.addUserStore(firstUser));
      setUserInfo(firstUser);
    }
  }, [dispatch, firstUser]);

  useEffect(() => {
    if (paramIdFriend) {
      setReferral_id(paramIdFriend);
    }
  }, [paramIdFriend]);

  return (
    <header>
      <ul className={style.header__list}>
        <li>
          <img src={avatar} alt="avatar" />
          <span
            className={
              userInfo && userInfo.name.length >= 10 ? style.fz : undefined
            }
          >
            {userInfo?.name}
          </span>
        </li>
        <li className={style.header__center}>
          <img src={logo} alt="logo" />
        </li>
        <li className={style.reverse}>
          <span>{userInfo?.points}</span>
          <HeaderCoinSvg />
        </li>
      </ul>
    </header>
  );
};
