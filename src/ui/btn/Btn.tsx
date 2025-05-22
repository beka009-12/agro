import { type FC } from "react";
import scss from "./Btn.module.scss";

interface Props {
  title: string;
  BkColor: string;
  color: string;
  border: string;
}

const Btn: FC<Props> = ({ title, BkColor, color, border }) => {
  return (
    <button
      style={{
        background: `${BkColor}`,
        color: `${color}`,
        border: `1px solid ${border}`,
      }}
      className={scss.btn}
    >
      {title}
    </button>
  );
};

export default Btn;
