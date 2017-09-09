export function selectDeck(deck) {
	// select book is action creator and needs to return an action, an object with a TYPE property
	return {
		type: 'DECK_SELECTED',
		payload: deck
	}
}