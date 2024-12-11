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

export const Header = () => {
  const { tg_id, userName } = useTelegram();
  const dispatch = useDispatch();
  const params = new URLSearchParams(useLocation().search);
  const paramIdFriend = params.get("id");
  const [referral_id, setReferral_id] = useState("");

  const { data: user } = useQuery(
    {
      queryFn: () =>
        paramIdFriend
          ? getFriend(tg_id, referral_id)
          : fetchUser(tg_id, userName),
      queryKey: ["user"],
      enabled: !!tg_id,
    },
    queryClient
  );
  console.log(paramIdFriend);
  useEffect(() => {
    if (user) {
      dispatch(userActions.addUserStore(user));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (paramIdFriend) {
      setReferral_id(paramIdFriend);
      console.log(paramIdFriend);
    }
  }, [paramIdFriend]);

  // const { data: user } = useQuery(
  //   {
  //     queryFn: () => fetchUser(tg_id, userName),
  //     queryKey: ["user"],
  //   },
  //   queryClient
  // );
  // useQuery(
  //   {
  //     queryKey: ["addFriend"],
  //     queryFn: () => getFriend(tg_id, referral_id),
  //     enabled: !!paramIdFriend,
  //   },
  //   queryClient
  // );

  // useEffect(() => {
  //   if (user) {
  //     dispatch(userActions.addUserStore(user));
  //   }
  // }, [dispatch, user]);

  // useEffect(() => {
  //   if (paramIdFriend) {
  //     setReferral_id(paramIdFriend);
  //   }
  // }, [paramIdFriend]);

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
          <span>{user?.points}</span>
          <HeaderCoinSvg />
        </li>
      </ul>
    </header>
  );
};
