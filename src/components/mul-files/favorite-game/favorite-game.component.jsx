import React from "react";
import withInputButton from "../with-input-button/with-input-button.hocomponent";

function FavoriteGame(props) {
  return (
    <div className="favorite-game">
      <h1>
        Your favorite game is: <span>{props.value}</span>
      </h1>
    </div>
  );
}

export default withInputButton(FavoriteGame);
