import iconInst from "../assets/png/task/iconInst.png";
import iconFriend from "../assets/png/task/refFriend.png";
import iconTg from "../assets/png/task/iconTel.png";
import iconS from "../assets/png/task/iconS.png";
import iconHeartY from "../assets/png/task/iconHeartY.png";
import iconWebinar from "../assets/png/task/iconWebinar.png";
import iconYotube from "../assets/png/task/iconYoutube.png";

export const getImgTask = (name: string, setIcon: (icon: string) => void) => {
  switch (name) {
    case "Подписка на инстаграм":
      return setIcon(iconInst);
    case "Пригласи друга по реферальной ссылке":
      return setIcon(iconFriend);
    case "Подписка на телеграм":
      return setIcon(iconTg);
    case "Подпишись на бота Skillbox":
      return setIcon(iconS);
    case "Посмотри видео на YouTube":
      return setIcon(iconHeartY);
    case "Посмотри вебинар":
      return setIcon(iconWebinar);
    case "Подписка на YouTube":
      return setIcon(iconYotube);
  }
};
