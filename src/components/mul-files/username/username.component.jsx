import React from "react";

import withInputButton from "../with-input-button/with-input-button.hocomponent";

const Username = (props) => (
  <div className="username">
    <h1>
      Your username is: <span>{props.value}</span>
    </h1>
  </div>
);

export default withInputButton(Username);
