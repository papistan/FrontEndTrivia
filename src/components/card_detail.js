import React, { Component } from 'react';
import FlipCard from 'react-flipcard';

class Card extends Component {

	constructor(props) {
		super(props);

		this.state = { isFlipped: false };
	}

	showBack() {
    this.setState({
      isFlipped: true
    });
  }

  showFront() {
    this.setState({
      isFlipped: false
    });
  }

  handleOnFlip(flipped) {
    if (flipped) {
      this.refs.backButton.getDOMNode().focus();
    }
  }

  handleKeyDown(e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
  }

	render(){
		return (
			<div >
        {/* Default behavior is horizontal flip on hover, or focus */}
        <FlipCard>
          {/* The first child is used as the front of the card */}
          <div >
            <div className="card">{this.props.card.q}</div>
          </div>
          {/* The second child is used as the back of the card */}
          <div className="card back">{this.props.card.a}</div>
        </FlipCard>
       </div>
		)
	}

}

export default Card;