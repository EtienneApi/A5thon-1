import React, { useState } from "react";
import "../CSS/engagement.css";
import Eye from "@assets/eye.png";

function EnSavoirPlus({ list }) {
  const [activ, setActive] = useState(false);

  return (
    <div>
      <div className="btn">
        <button
          type="button"
          className={activ ? "btn-red " : "btn-green"}
          onClick={() => setActive(!activ)}
        >
          <img className="eye" src={Eye} alt={Eye} />
        </button>
      </div>
      <div>
        {activ ? (
          <div>
            {/* <h6 className="details">Plus de détails</h6> */}
            <p className="explications">{list.explication}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default EnSavoirPlus;
