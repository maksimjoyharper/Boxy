import style from "./Header.module.scss";
import logo from "../../assets/webp/logo.webp";
import avatar from "../../assets/webp/avatar.webp";
import { HeaderCoinSvg } from "../../assets/svg/HeaderCoinSvg";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../api/fetchUser/fetchUser";
import { useTelegram } from "../../hooks/telegram/telegram";
import { queryClient } from "../../api/queryClient";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../provider/StoreProvider/slice/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getBlogerFriend,
  getFriend,
} from "../../api/fetchFriends/fetchFriends";
import { fetchUserProps } from "../../types/userType";
import classNames from "classnames";

export const Header = () => {
  const { tg, tg_id, userName } = useTelegram();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = new URLSearchParams(useLocation().search);
  const paramIdFriend: string | null = params.get("id");
  const [referral_id, setReferral_id] = useState<string>();
  const [bloger_id, setBloger_id] = useState<string>();
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

  const { data: firstBlogerUser } = useQuery(
    {
      queryKey: ["addFriendUtm"],
      queryFn: () => getBlogerFriend(tg_id, userName, bloger_id),
      enabled: !!bloger_id && !!tg_id,
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
    if (firstBlogerUser) {
      dispatch(userActions.addUserStore(firstBlogerUser));
      setUserInfo(firstBlogerUser);
    }
  }, [dispatch, firstBlogerUser]);

  useEffect(() => {
    if (firstUser) {
      dispatch(userActions.addUserStore(firstUser));
      setUserInfo(firstUser);
    }
  }, [dispatch, firstUser]);

  useEffect(() => {
    if (paramIdFriend !== null) {
      // Check if the string contains any letters
      const containsLetters = /[a-zA-Z]/.test(paramIdFriend);

      if (containsLetters) {
        setBloger_id(paramIdFriend);
      } else {
        setReferral_id(paramIdFriend);
      }
    }
  }, [paramIdFriend]);

  const handleNavigate = () => {
    navigate("tasks");
    tg.HapticFeedback.impactOccurred("medium");
  };

  return (
    <header>
      <ul className={style.header__list}>
        <li>
          <img width={34} height={34} src={avatar} alt="avatar" />
          <span
            className={
              userInfo && userInfo.name.length >= 10 ? style.fz : undefined
            }
          >
            {userInfo?.name}
          </span>
        </li>
        <li className={style.header__center}>
          <img width={69} height={15} src={logo} alt="logo" />
        </li>
        <li className={style.reverse}>
          <button
            className={classNames(style.header__button, style.reverse)}
            onClick={handleNavigate}
          >
            <span>{userInfo?.points}</span>
            <HeaderCoinSvg />
          </button>
        </li>
      </ul>
    </header>
  );
};
