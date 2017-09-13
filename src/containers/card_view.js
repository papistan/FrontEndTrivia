import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card_detail';
import { selectNewDeck } from '../actions/index';
import { bindActionCreators } from 'redux';

class CardView extends Component {
	constructor(props) {
  super(props);
  this.state = {
    shuffledDeck: []
  };
}

	changeCard(props, cardsArray) {
		if (props.newDeck) {
			props.selectNewDeck(false);
			cardsArray.push(cardsArray.shift());
			this.setState({ shuffledDeck: cardsArray });
		} else {
			cardsArray.push(cardsArray.shift());
			this.setState({ shuffledDeck: cardsArray });
		}
	};

	render(){
		var chosenDeck = this.props.deck

		if (chosenDeck == null) {
					
			return (
				<div className="video-detail col-md-8">
					<div className="embed-responsive embed-responsive-16by9">
						<img src="http://blog.aurionlearning.com/wp-content/uploads/2016/11/html-css-js-1.png" />
						<h3>Select a topic => </h3>
					</div>
				</div>
			)

		} else if (this.props.newDeck == ( true )) { 

		const cardsArray = chosenDeck.cards.map((card) => {
				return ( 
					<Card 
						key={card.q}
						card={card}
					/>
				)
			});

			return (
					<div>
						<div className="col-md-4 list-group card-view">
							<div>
								{this.props.deck.title}
								<button 
								className="button button1"
								onClick={() => this.changeCard(this.props, cardsArray)}
								>NEXT</button>
								<button 
								className="button button2"
								onClick={() => this.changeCard(this.props, cardsArray)}
								>NEXT</button>
							</div>

							<div>{cardsArray[0]}</div>
						</div>

					</div>

					)
		} else {
		
			return (
				<div>
					<div className="col-md-4 list-group card-view">
						<div>
							{this.props.deck.title}
							<button 
								className="button button1"
								onClick={() => this.changeCard(this.props, this.state.shuffledDeck)}>NEXT
							</button>
							<button 
								className="button button2"
								onClick={() => this.changeCard(this.props, this.state.shuffledDeck)}>NEXT
							</button>
						</div>
						<div>{this.state.shuffledDeck[0]}</div>
					</div>
				</div>
			)
		}
	}
}

function mapStateToProps(state) {
// this v converts state into props
	return {
		deck: state.activeDeck,
		newDeck: state.newDeck
	};
}

function mapDispatchToProps(dispatch) {
	
	// whenever selectDeck is called, the result should be passed to all our reducers
	return bindActionCreators({ selectNewDeck: selectNewDeck }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(CardView); 