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
            <button type="submit"> Save </button>
          </form>
        </div>
      );
    }
  };
};

export default withInputButton;
