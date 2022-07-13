import "./style.css";
import arrowDown from "../../assets/arrow-down.png";
import arrowUp from "../../assets/arrow-up.png";
import { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setOpen] = useState(false);

  const toggleClass = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleClass}>
        <p>{title}</p>
        {!isOpen ? (
          <img src={arrowDown} alt="Arrow down" />
        ) : (
          <img src={arrowUp} alt="Arrow up" />
        )}
      </div>
      <div className={isOpen ? "collapse-opened" : "collapse-closed"}>
        <div>{content}</div>
      </div>
    </div>
  );
}

export default Collapse;
