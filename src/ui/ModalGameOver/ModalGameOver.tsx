import { useNavigate } from "react-router-dom";
import { HeaderCoinSvg } from "../../assets/svg/HeaderCoinSvg";
import style from "./ModalGameOver.module.css";
import { useMutation } from "@tanstack/react-query";
import { fetchGame, fetchGameProps } from "../../api/fetchGame/fetchGame";
import { useTelegram } from "../../hooks/telegram/telegram";
import { queryClient } from "../../api/queryClient";
import { useSelector } from "react-redux";
import { getCurrTickets } from "../../provider/StoreProvider/selectors/getCurrTicket";
// import { getUser } from "../../provider/StoreProvider/selectors/getUser";

type ModalGameOverProps = {
  finalPoints: number;
};

export default function ModalGameOver({ finalPoints }: ModalGameOverProps) {
  const navigate = useNavigate();
  const { tg, tg_id } = useTelegram();
  const ticket = useSelector(getCurrTickets);
  // const user = useSelector(getUser);

  const dataMutate: fetchGameProps = {
    tg_id: tg_id,
    points: finalPoints,
    tickets: 1,
  };
  const dataMutatePrem: fetchGameProps = {
    tg_id: tg_id,
    points: finalPoints * 2,
    premium_tickets: 1,
  };
  const useGameOverMutation = useMutation(
    {
      mutationFn: (data: fetchGameProps) => fetchGame(data),
    },
    queryClient
  );
  console.log(ticket);

  // const newGame = () => {
  //   tg.HapticFeedback.impactOccurred("light");
  //   if (ticket) {
  //     useGameOverMutation.mutate(dataMutate, {
  //       onSuccess: () => {
  //         if (user?.tickets !== 0) {
  //           location.reload();
  //         }
  //       },
  //     });
  //   } else {
  //     useGameOverMutation.mutate(dataMutatePrem, {
  //       onSuccess: () => {
  //         if (user?.premium_tickets !== 0) {
  //           location.reload();
  //         }
  //       },
  //     });
  //   }
  // };

  const backHomePage = () => {
    tg.HapticFeedback.impactOccurred("light");
    if (ticket) {
      useGameOverMutation.mutate(dataMutate, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["user"] });
          navigate("/");
        },
      });
    } else {
      useGameOverMutation.mutate(dataMutatePrem, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["user"] });
          navigate("/");
        },
      });
    }
  };
  return (
    <div className={style.container}>
      <div className={style.container_content}>
        <p className={style.title_game_prize}>Твоя награда:</p>
        <div className={style.coin_box}>
          <HeaderCoinSvg />
          <span
            className={style.text_coin}
            style={ticket ? { background: "none" } : { background: "#3D3BFF" }}
          >
            {ticket ? finalPoints : finalPoints * 2}
          </span>
        </div>
        {/* <button onClick={newGame} className={style.new_game_button}>
          Новая игра
        </button> */}
        <button onClick={backHomePage} className={style.back_home_button}>
          Забрать награду
        </button>
      </div>
    </div>
  );
}
