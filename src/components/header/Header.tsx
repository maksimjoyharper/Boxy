import style from "./Header.module.scss";
import logo from "../../assets/webp/logo.webp";
import { HeaderCoinSvg } from "../../assets/svg/HeaderCoinSvg";
import { useTelegram } from "../../hooks/telegram/telegram";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../provider/StoreProvider/slice/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchUserProps } from "../../types/userType";
import classNames from "classnames";
import { formatCoins } from "../../features/formatNumber";
import {
  useFetchUser,
  useFirstBlogerUser,
  useReferralUser,
} from "../../hooks/useHooks/useUser";

export const Header = () => {
  const { tg, tg_id, userName, avatar } = useTelegram();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = new URLSearchParams(useLocation().search);
  const paramIdFriend: string | null = params.get("id");
  const [referral_id, setReferral_id] = useState<string>("");
  const [bloger_id, setBloger_id] = useState<string>("");
  const [userInfo, setUserInfo] = useState<fetchUserProps>();

  const { data: user } = useFetchUser(tg_id, userName, paramIdFriend);

  const { data: firstUser } = useReferralUser(tg_id, userName, referral_id);

  const { data: firstBlogerUser } = useFirstBlogerUser(
    tg_id,
    userName,
    bloger_id
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
          <img className={style.avatar} src={avatar} alt="avatar" />
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
            <span>{userInfo && formatCoins(userInfo?.points)}</span>
            <HeaderCoinSvg />
          </button>
        </li>
      </ul>
    </header>
  );
};
