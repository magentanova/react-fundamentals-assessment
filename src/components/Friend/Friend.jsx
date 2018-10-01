import React from "react";

class Friend extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.selectGuest(this.props.friendData);
  }

  render() {
    const friendData = this.props.friendData;
    return (
      <li className="friend" id={friendData.id} onClick={this.handleClick}>
        {friendData.name}
      </li>
    );
  }
}

export default Friend;
