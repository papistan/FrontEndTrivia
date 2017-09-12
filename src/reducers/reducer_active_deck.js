export default function(state = null, action) {
	
	switch(action.type) {
		case 'DECK_SELECTED':
			return action.payload;
	}
	// this.setState({
 //    firstCard: true,
 //    currentDeck: [],
 //    currentCard: false
 //  })
	return state
}