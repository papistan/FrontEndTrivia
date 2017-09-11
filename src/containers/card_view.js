import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card_detail';

class CardView extends Component {
	constructor(props) {
		super(props);

		this.state = { currentCard: "", cardsArray: [] };
	}

	changeCard() {
		this.state.cardsArray.push(cardsArray.shift());
		this.setState({
			currentCard: this.state.cardsArray[0]
		});
	};

	setCard() {
		this.setState({
			currentCard: this.state.cardsArray[0]
		});
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
			// console.log(this.state.currentCard)
			// console.log("************")

			return (
					<div>
						<div className="col-md-4 list-group card-view">
							<div>
								<button 
								className="button button1"
								onClick={this.changeCard}
								>NEXT</button>
								<button 
								className="button button2"
								onClick={this.changeCard}
								>NEXT</button>
							</div>

							<div>{this.state.currentCard}</div>
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