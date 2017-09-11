import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card_detail';

class CardView extends Component {
	constructor(props) {
  super(props);
  this.state = {
    firstCard: true,
    currentDeck: [],
    currentCard: false
  };
}

	changeCard(cardsArray) {
		if (this.state.firstCard) {
			cardsArray.push(cardsArray.shift());
			this.setState({currentCard: cardsArray[0], firstCard: false, currentDeck: cardsArray });
		} else {
			var nextCardsArray = this.state.currentDeck;
			nextCardsArray.push(nextCardsArray.shift());
			this.setState({currentCard: nextCardsArray[0], currentDeck: nextCardsArray });
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

		} else { 
		
			
		const cardsArray = chosenDeck.cards.map((card) => {
				return ( 
					<Card 
						key={card.q}
						card={card}
					/>
				)
			});

		 // this.props.selectCard(cardsArray[0]);
		

			return (
					<div>
						<div className="col-md-4 list-group card-view">
							<div>
								<button 
								className="button button1"
								onClick={() => this.changeCard(cardsArray)}
								>NEXT</button>
								<button 
								className="button button2"
								onClick={() => this.changeCard(cardsArray)}
								>NEXT</button>
							</div>

							<div>{this.state.currentCard || cardsArray[0]}</div>
						</div>

						</div>

					)
		}
	}
}

function mapStateToProps(state) {
// this v converts state into props
	return {
		deck: state.activeDeck
	};
}

export default connect(mapStateToProps)(CardView); 