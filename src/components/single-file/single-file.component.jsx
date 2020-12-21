import React from "react";

const withInputButton = (WrappedComponent) => {
  return class extends React.Component {
    constructor() {
      super();

      this.state = {
        input: "",
        value: "",
      };
    }

    handleChange = (event) => {
      this.setState({
        input: event.target.value,
      });
    };

    handleSubmit = (event) => {
      event.preventDefault();

      this.setState({
        value: this.state.input,
        input: "",
      });
    };

    render() {
      return (
        <div className="container">
          <WrappedComponent value={this.state.value} />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.input}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    }
  };
};

const Username = withInputButton(function (props) {
  return (
    <div className="username">
      <h1>
        Your username is: <span>{props.value}</span>
      </h1>
    </div>
  );
});

const FavoriteGame = withInputButton(function (props) {
  return (
    <div className="favorite-game">
      <h1>
        Your favorite game is: <span>{props.value}</span>
      </h1>
    </div>
  );
});

const SingleFile = () => {
  return (
    <div className="single-file">
      1st way,
      <Username />
      <FavoriteGame />
    </div>
  );
};

export default SingleFile;
