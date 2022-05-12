import React from "react";
// import engagementData from "../Data/engagementData";
import EnSavoirPlus from "../components/EnSavoirPlus";
import "../CSS/engagement.css";

function CardEngagement({ list }) {
  // const [selection, setSelection] = useState(engagementData);
  return (
    <div className="cards">
      <div className="text">
        <h3>{list.text}</h3>
      </div>
      <div className="explication">
        <EnSavoirPlus />
      </div>
    </div>
  );
}

export default CardEngagement;
