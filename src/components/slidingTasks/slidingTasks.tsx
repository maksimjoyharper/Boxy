import { fetchTasksProps } from "../../api/fetchTasks/fetchTasks";
import SlidingPanel from "../../ui/SlidingPanel/SlidingPanel";
import style from "./slidingTasks.module.scss";

interface ISliding {
  isOpen: boolean;
  onClose: () => void;
  initialHeight: string;
  fullHeight: string;
  task: fetchTasksProps;
}

export default function SlidingTasks({
  fullHeight,
  initialHeight,
  isOpen,
  onClose,
}: ISliding) {
  return (
    <SlidingPanel
      initialHeight={initialHeight}
      fullHeight={fullHeight}
      darkened
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={style.sliding__block}></div>
    </SlidingPanel>
  );
}
