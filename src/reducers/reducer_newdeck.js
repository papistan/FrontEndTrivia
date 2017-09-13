export default function(state = null, action) {
	
	switch(action.type) {
		case 'NEWDECK_SELECTED':
			return action.payload;
	}
	return state
}