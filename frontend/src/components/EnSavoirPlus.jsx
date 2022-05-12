import React, { useState } from "react";
import "../CSS/engagement.css";

function EnSavoirPlus({ list }) {
  const [activ, setActive] = useState(false);

  return (
    <div>
      <div className="btn">
        <button
          className={activ ? "btn-red " : "btn-green"}
          onClick={() => setActive(!activ)}
        >
          Voir
        </button>
      </div>
      <div>
        {activ ? (
          <div>
            <h6>Plus de détails</h6>
            <p>{list.explication}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default EnSavoirPlus;
