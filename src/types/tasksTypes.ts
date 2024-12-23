export interface fetchTasksProps {
  task: {
    id: number;
    name: string;
    dop_name: string;
    description: string;
    link: string;
    reward_currency: string;
    reward_tickets: string;
    is_active: boolean;
    heading: string;
  };
  start_time: string;
  completed: boolean;
  add_flag: boolean;
}

export interface fetchFirstTask {
  tg_id: string;
  country: string;
  name_player: string;
  phone: string;
}

export type CardTaskProps = {
  task: fetchTasksProps;
  allTasks: fetchTasksProps[];
};

export interface ISlidingTasks {
  isOpen: boolean;
  onClose: () => void;
  initialHeight: string;
  fullHeight: string;
  task: fetchTasksProps;
}
