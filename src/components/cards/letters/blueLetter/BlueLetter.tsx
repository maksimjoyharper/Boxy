import "./BlueLetter.css";
import blueLetter from "../../../../assets/S-blue.png";
interface LetterProps {
  x: number;
  duration: number;
  id: string;
}

const BlueLetter: React.FC<LetterProps> = ({ x, duration, id }) => {
  return (
    <img
      id={id}
      src={blueLetter}
      className="falling_letter"
      style={{ left: `${x}%`, animationDuration: `${duration}s` }}
    />
  );
};

export default BlueLetter;
