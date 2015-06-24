import React, {Component} from "react";

class MyComponent extends Component {
  render() {
    return <h1 onClick={() => alert('hello,' + this.props.name)}>Hello,{this.props.name}</h1>
  }
}

MyComponent.propTypes = {
  name: React.PropTypes.string
};

MyComponent.defaultProps = {
  name: "Jack"
};

export default MyComponent;
