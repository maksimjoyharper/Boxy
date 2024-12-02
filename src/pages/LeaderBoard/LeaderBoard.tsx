import { useQuery } from "@tanstack/react-query";
import { LeaderboardItem } from "../../components/LeaderboardItem";
import { PageUI } from "../../ui/PageUI/PageUI";
import { fetchLeaderboard } from "../../api/fetchLeaderboard/fetchLeaderboard";
import { queryClient } from "../../api/queryClient";
import { useTelegram } from "../../hooks/telegram/telegram";

const Leaderboard = () => {
  const { tg_id } = useTelegram();

  const { leader } = useQuery(
    {
      queryFn: () => fetchLeaderboard(tg_id),
      queryKey: ["leaderboard"],
    },
    queryClient
  );

  return (
    <PageUI
      place="09"
      title="Leaderboard"
      time="До конца осталось: 12 дней 8 часов"
    >
      <LeaderboardItem />
    </PageUI>
  );
};

export default Leaderboard;
