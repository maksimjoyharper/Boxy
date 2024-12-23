import { IBlueLettArr, IFlask, IWhiteLettArr } from "./types";
import { fetchUserProps } from "./userType";

export interface fetchGameOverProps {
  tg_id: string;
  points: number;
}

export interface fetchGameProps {
  tg_id: string;
  tickets?: number;
  premium_tickets?: number;
}

export interface FlaskProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  flasks: IFlask[];
  setFlask: React.Dispatch<React.SetStateAction<IFlask[]>>;
}

export interface BombProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setWhiteLetter: React.Dispatch<React.SetStateAction<IWhiteLettArr[]>>;
  setBlueLetter: React.Dispatch<React.SetStateAction<IBlueLettArr[]>>;
  setFlask: React.Dispatch<React.SetStateAction<IFlask[]>>;
}
export interface BlueLetterProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  blueLetter: IBlueLettArr[];
  setBlueLetter: React.Dispatch<React.SetStateAction<IBlueLettArr[]>>;
}

export interface LetterProps {
  x: number;
  duration: number;
  id: string;
  onClick: (id: string) => void;
}

export type ModalGameOverProps = {
  finalPoints: number;
};

export interface ISlidingGame {
  isOpen: boolean;
  onClose: () => void;
  initialHeight: string;
  fullHeight: string;
  user: fetchUserProps | undefined;
}

export interface ISlidingNotTickets {
  isOpen: boolean;
  onClose: () => void;
  initialHeight: string;
  fullHeight: string;
  currentTicket: boolean;
}
