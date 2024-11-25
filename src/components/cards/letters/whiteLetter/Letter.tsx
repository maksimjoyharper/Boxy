import "./Letter.css";
import whiteLetter from "../../../../assets/S-white.png";
interface LetterProps {
  x: number;
  duration: number;
  id: string;
  onClick: (id: string) => void;
}

const Letter: React.FC<LetterProps> = ({ x, duration, id, onClick }) => {
  return (
    <button
      className="btn"
      onTouchStart={() => onClick(id)}
      id={id}
      style={{ left: `${x}%`, animationDuration: `${duration}s` }}
    >
      {" "}
      <img src={whiteLetter} className="falling_letter_white" />
    </button>
  );
};

export default Letter;
