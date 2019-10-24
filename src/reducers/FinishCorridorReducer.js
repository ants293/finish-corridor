const INITIAL_STATE  = {timingsList: []};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_FINISH_CORRIDOR':
            return {
                ...state,
                timingsList: [...state.timingsList, ...action.payload]
            };
        default:
            return state
    }
}
