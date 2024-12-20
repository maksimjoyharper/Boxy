import iconInst from "../assets/png/task/iconInst.png";
import iconFriend from "../assets/png/task/refFriend.png";
import iconTg from "../assets/png/task/iconTel.png";
import iconS from "../assets/png/task/iconS.png";
import iconHeartY from "../assets/png/task/iconHeartY.png";
import iconWebinar from "../assets/png/task/iconWebinar.png";
import iconYotube from "../assets/png/task/iconYoutube.png";
import iconFirst from "../assets/png/task/imgFirstTask.png";

export const getImgTask = (name: string, setIcon: (icon: string) => void) => {
  switch (name) {
    case "instagram":
      return setIcon(iconInst);
    case "friend":
      return setIcon(iconFriend);
    case "tg_by":
      return setIcon(iconTg);
    case "tg_kz":
      return setIcon(iconTg);
    case "tg_uz":
      return setIcon(iconTg);
    case "telegram_bot":
      return setIcon(iconS);
    case "youtube_video":
      return setIcon(iconHeartY);
    case "webinar":
      return setIcon(iconWebinar);
    case "youtube":
      return setIcon(iconYotube);
    case "anketa":
      return setIcon(iconFirst);
  }
};
