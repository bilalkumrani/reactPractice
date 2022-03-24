import React, { Component } from "react";

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state({
        count: 0,
      });
    }

    handleCounter = () => {
      this.setState((preState) => {
        return { count: preState + 1 };
      });
    };

    render() {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <OriginalComponent
            count={this.state.count}
            increment={this.handleCounter}
          />
        </div>
      );
    }
  }

  return NewComponent;
};

export default UpdatedComponent;
