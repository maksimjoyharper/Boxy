import { ReactNode } from "react";

export interface fetchLeaderboardProps {
  top_players: {
    tg_id: number;
    name: string;
    points: number;
    rank: number;
  }[];
  player_rank: string;
}

export interface ILeaderboardItem {
  id: number;
  name: string;
  points: number;
  index: number;
  openModal: () => void;
}
export interface SlidingLeaderboardProps {
  initialHeight: string;
  fullHeight: string;
  isOpen: boolean;
  onClose: () => void;
}

export interface IPage {
  title: string;
  time?: string;
  children?: React.ReactNode;
  place?: string;
  className__title?: string;
  className?: string;
  gift?: ReactNode;
  name?: string;
  coins?: number;
  isOpen?: () => void;
}
