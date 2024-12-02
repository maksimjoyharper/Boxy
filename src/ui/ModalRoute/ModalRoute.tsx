import { ReactNode } from "react";
import style from "./ModalRoute.module.scss";

interface ModalProps {
  children: ReactNode;
}

function ModalRoute({ children }: ModalProps) {
  return (
    <div className={style.modal}>
      <div className={style.overlay}>
        <div className={style.content}>{children}</div>
      </div>
    </div>
  );
}

export default ModalRoute;
