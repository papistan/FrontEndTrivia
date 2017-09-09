import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardView extends Component {
	render(){
		var prop = this.props.deck
		if (prop == null) {
					
						return (
							<div>
								<h3>Select a topic</h3>
							</div>
						)
					
		} else { 
				
					return (
						<div>
							<h3>Details for:</h3>
							<div>{this.props.deck.title}</div>
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