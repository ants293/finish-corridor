import { UPDATE_FINISH_CORRIDOR, UPDATE_READERS } from "../types/FinishCorridorTypes";

const INITIAL_STATE  = {
    timingsList: [],
    readers: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_READERS:
            return {
                ...state,
                readers: [...action.payload],
            };
        case UPDATE_FINISH_CORRIDOR:
            return {
                ...state,
                timingsList: [...action.payload, ...state.timingsList],
            };
        default:
            return state
    }
}
