import style from "./Friends.module.scss";
import { PageUI } from "../../ui/PageUI/PageUI";
import { useQuery } from "@tanstack/react-query";
import {
  fetchAllFriends,
  fetchFriendsProps,
  getRefLink,
} from "../../api/fetchFriends/fetchFriends";
import { useTelegram } from "../../hooks/telegram/telegram";
import { queryClient } from "../../api/queryClient";
import { useEffect, useState } from "react";
import CardFriend from "../../components/cards/cardFriend/CardFriend";
import { SlidingFriends } from "../../components/slidingFriends";

export default function Friends() {
  const { tg, tg_id } = useTelegram();
  const [friendsArr, setFriendsArr] = useState<fetchFriendsProps[]>([]);
  const [refLink, setRefLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    tg.HapticFeedback.impactOccurred("light");
  };

  const handleInviteFriend = () => {
    const url = `https://t.me/share/url?url=${refLink}`;
    tg.openTelegramLink(url);
    tg.HapticFeedback.impactOccurred("light");
  };

  const gettingRefLink = useQuery(
    {
      queryKey: ["refLink"],
      queryFn: () => getRefLink(tg_id),
    },
    queryClient
  );

  const { data } = useQuery(
    {
      queryKey: ["friends"],
      queryFn: () => fetchAllFriends(tg_id),
    },
    queryClient
  );

  useEffect(() => {
    if (gettingRefLink.data) {
      setRefLink(gettingRefLink.data.ref_link);
    }
  }, [gettingRefLink]);

  useEffect(() => {
    if (data) {
      setFriendsArr(data);
    }
  }, [data]);

  return (
    <>
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
          <button className={style.invite__button} onClick={handleInviteFriend}>
            Пригласить друга
          </button>
        </div>
        <ul className={style.page__list}>
          {friendsArr.map((friend, index) => (
            <CardFriend
              isOpen={setIsOpen}
              friends={friend}
              key={friend.tg_id}
              index={index}
              isDisabled={false}
            />
          ))}
          {friendsArr.length === 0 && (
            <>
              <CardFriend
                friends={{
                  name: "Name",
                  points: "1.2kk",
                  reg_data: "10.10.24",
                  referral_bonus: true,
                  tg_id: "654651",
                }}
                isDisabled={true}
                index={0}
              />{" "}
              <CardFriend
                friends={{
                  name: "Name",
                  points: "1.2kk",
                  reg_data: "10.10.24",
                  referral_bonus: false,
                  tg_id: "654651",
                }}
                isDisabled={true}
                index={1}
              />{" "}
              <CardFriend
                friends={{
                  name: "Name",
                  points: "1.2kk",
                  reg_data: "10.10.24",
                  referral_bonus: false,
                  tg_id: "654651",
                }}
                isDisabled={true}
                index={2}
              />
            </>
          )}
        </ul>
      </PageUI>
      <SlidingFriends
        isOpen={isOpen}
        onClose={handleClose}
        initialHeight={"70%"}
        fullHeight={"70vh"}
      />
    </>
  );
}
