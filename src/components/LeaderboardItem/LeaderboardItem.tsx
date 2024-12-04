interface ILeaderboardItem {
  id: number;
  name: string;
  points: number;
  rank: number;
}

export const LeaderboardItem = ({
  id,
  name,
  points,
  rank,
}: ILeaderboardItem) => {
  return (
    <li key={id}>
      <h2>{name}</h2>
      <p>{points}</p>
      <p>{rank}</p>
    </li>
  );
};
