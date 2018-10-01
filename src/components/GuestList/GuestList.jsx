import React from "react";

import Friend from "../Friend/Friend";

class GuestList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedGuests: []
    };
    this.selectGuest = this.selectGuest.bind(this);
  }

  selectGuest(guestObj) {
    if (this.state.selectedGuests.filter(o => o.id === guestObj.id).length) {
      return;
    }
    this.setState({
      selectedGuests: this.state.selectedGuests.concat([guestObj])
    });
  }

  render() {
    return (
      <div className="guest-list-container">
        <h1>Guest List</h1>
        <h2>Invited Guests</h2>
        <ul className="list-box guest-list">
          {this.state.selectedGuests.map(o => <li>{o.name}</li>)}
        </ul>
        <h2>Friends</h2>
        <ul className="list-box friends-list">
          {this.props.friends.map(friendObj => (
            <Friend
              key={friendObj.id}
              friendData={friendObj}
              selectGuest={this.selectGuest}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default GuestList;
