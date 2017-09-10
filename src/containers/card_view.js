import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardView extends Component {
	render(){
		var prop = this.props.deck
		if (prop == null) {
					
						return (
							<div className="video-detail col-md-8">
								<div className="embed-responsive embed-responsive-16by9">
									
									<img src="http://blog.aurionlearning.com/wp-content/uploads/2016/11/html-css-js-1.png" />
									<h3>Select a topic => </h3>
								</div>
							</div>
						)
					
		} else { 
				
					return (
						<div className="video-detail col-md-8">
							<div className="embed-responsive embed-responsive-16by9">
								<h3>Details for:</h3>
								<img src={this.props.deck.image} />
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