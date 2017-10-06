import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card_detail';
import { selectNewDeck } from '../actions/index';
import { bindActionCreators } from 'redux';

class CardView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shuffledDeck: [],
			correct: 0,
			total: 0
		};
	}

	changeCard(props, cardsArray, point) {
		if (props.newDeck) {
			props.selectNewDeck(false);
		}
		cardsArray.shift();
		this.setState({ shuffledDeck: cardsArray, correct: (this.state.correct + point), total: (this.state.total + 1) });
	};

	render() {
		var chosenDeck = this.props.deck;
		if (chosenDeck == null) {
			return (
				<div className="video-detail col-md-8 card-view">
					<div className="embed-responsive embed-responsive-16by9 landing-image">
						<img className="actual-image" src="../style/images/html-css-js.png" />
					</div>
					<h3 id="topic">Select a topic > </h3>
				</div>
			)
		} else if (this.props.newDeck == (true)) {
			const cardsArray = chosenDeck.cards.map((card) => {
				return (
					<Card
						key={card.q}
						card={card}
					/>
				)
			});
			return (
				<div className="col-md-4 list-group card-view">
					<div className="card-show">
						{cardsArray[0]}
						<h6 className="hover"> - hover for answer -</h6>
					</div>
					<div className="button-row">
						<button
							className="button button1"
							onClick={() => this.changeCard(this.props, cardsArray, 1)}>&#10003;</button>
						<button
							className="button button2"
							onClick={() => this.changeCard(this.props, cardsArray, 0)}>&#10006;</button>
					</div>
					<div className="deck-title">
						<h3>{this.props.deck.title}</h3>
						<h6>Total Score: {this.state.correct} out of {this.state.total}</h6>
					</div>
				</div>
			)
		} else {
			return (
				<div className="col-md-4 list-group card-view">
					<div className={`card-show ${!this.state.shuffledDeck.length? 'hover' : ''}`}>
						{this.state.shuffledDeck.length ? this.state.shuffledDeck[0] : 'Deck completed'}
					</div>
					<div className="button-row">
						<button
							className="button button1"
							disabled={!this.state.shuffledDeck.length}				
							onClick={() => this.changeCard(this.props, this.state.shuffledDeck, 1)}>&#10003;</button>
						<button
							className="button button2"
							disabled={!this.state.shuffledDeck.length}
							onClick={() => this.changeCard(this.props, this.state.shuffledDeck, 0)}>&#10006;</button>
					</div>
					<div className="deck-title">
						<h3>{this.props.deck.title}</h3>
						<h6>Total Score: {this.state.correct} out of {this.state.total}</h6>
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
	return bindActionCreators({
		selectNewDeck,
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CardView); 