import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectDeck } from '../actions/index';
import { bindActionCreators } from 'redux';

class DeckList extends Component {
	renderList(){

	return this.props.decks.map((deck) => {
			return (
				<li 
					key={deck.title} 
					onClick={() => this.props.selectDeck(deck)}
					className="list-group-item">
						<div className="video-list media">
							<div className="media-left">
								<img className="decks" src={deck.image} />
							</div>

							<div className="media-body">
								<div className="media-heading">{deck.title}</div>
							</div>
						</div>
				</li>
		 	);
		});
	}

	render() {
		return (
			<ul className="col-md-4 list-group list-length deck-list">
				{this.renderList()}
			</ul>
		)
	}
};


function mapStateToProps(state) {
// this v converts state into props
	return {
		decks: state.decks
	};
}

function mapDispatchToProps(dispatch) {
	
	// whenever selectDeck is called, the result should be passed to all our reducers
	return bindActionCreators({ selectDeck: selectDeck }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);