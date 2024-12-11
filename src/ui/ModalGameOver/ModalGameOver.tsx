import { useNavigate } from "react-router-dom";
import { HeaderCoinSvg } from "../../assets/svg/HeaderCoinSvg";
import style from "./ModalGameOver.module.css";
import { useMutation } from "@tanstack/react-query";
import { fetchGame, fetchGameProps } from "../../api/fetchGame/fetchGame";
import { useTelegram } from "../../hooks/telegram/telegram";
import { queryClient } from "../../api/queryClient";
// import { useSelector } from "react-redux";

type ModalGameOverProps = {
  finalPoints: number;
};

export default function ModalGameOver({ finalPoints }: ModalGameOverProps) {
  const navigate = useNavigate();
  const { tg, tg_id } = useTelegram();
  //   const ticket = useSelector(()
  const dataMutate: fetchGameProps = {
    tg_id: tg_id,
    points: finalPoints,
    tickets: 2,
  };
  const useGameOverMutation = useMutation(
    {
      mutationFn: (data: fetchGameProps) => fetchGame(data),
    },
    queryClient
  );

  const newGame = () => {
    tg.HapticFeedback.impactOccurred("light");
    useGameOverMutation.mutate(dataMutate);
    location.reload();
  };

  const backHomePage = () => {
    tg.HapticFeedback.impactOccurred("light");
    useGameOverMutation.mutate(dataMutate);
    navigate("/");
  };
  return (
    <div className={style.container}>
      <div className={style.container_content}>
        <p className={style.title_game_prize}>Твоя награда:</p>
        <div className={style.coin_box}>
          <HeaderCoinSvg />
          <span className={style.text_coin}>{finalPoints}</span>
        </div>
        <button disabled onClick={newGame} className={style.new_game_button}>
          Новая игра
        </button>
        <button
          disabled
          onClick={backHomePage}
          className={style.back_home_button}
        >
          На главный экран
        </button>
      </div>
    </div>
  );
}
