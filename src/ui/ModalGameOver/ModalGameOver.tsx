import { useNavigate } from "react-router-dom";
import iconCoin from "../../assets/webp/coin.webp";
import style from "./ModalGameOver.module.css";
import { useMutation } from "@tanstack/react-query";
import {
  fetchGameOverProps,
  fetchOverGame,
} from "../../api/fetchGame/fetchGame";
import { useTelegram } from "../../hooks/telegram/telegram";
import { queryClient } from "../../api/queryClient";
import { useSelector } from "react-redux";
import { getCurrTickets } from "../../provider/StoreProvider/selectors/getCurrTicket";

type ModalGameOverProps = {
  finalPoints: number;
};

export default function ModalGameOver({ finalPoints }: ModalGameOverProps) {
  const navigate = useNavigate();
  const { tg, tg_id } = useTelegram();
  const ticket = useSelector(getCurrTickets);

  const useGameOverMutation = useMutation(
    {
      mutationFn: (data: fetchGameOverProps) => fetchOverGame(data),
    },
    queryClient
  );

  const backHomePage = () => {
    if (ticket) {
      useGameOverMutation.mutate(
        { tg_id: tg_id, points: finalPoints },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user"] });
            navigate("/");
          },
        }
      );
    } else {
      useGameOverMutation.mutate(
        { tg_id: tg_id, points: finalPoints * 2 },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user"] });
            navigate("/");
          },
        }
      );
    }
    tg.HapticFeedback.impactOccurred("light");
  };
  return (
    <div className={style.container}>
      <div className={style.container_content}>
        <p className={style.title_game_prize}>Твоя награда:</p>
        <div className={style.coin_box}>
          <img src={iconCoin} width={32} height={32} />
          <span
            className={style.text_coin}
            style={ticket ? { background: "none" } : { background: "#3D3BFF" }}
          >
            {ticket ? finalPoints : finalPoints * 2}
          </span>
        </div>

        <button onClick={backHomePage} className={style.back_home_button}>
          Забрать награду
        </button>
      </div>
    </div>
  );
}
