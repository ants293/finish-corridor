export default (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_FINISH_CORRIDOR':
            return {
                finishCorridor: action.payload
            };
        default:
            return state
    }
}
