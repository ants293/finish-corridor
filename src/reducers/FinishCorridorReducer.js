import { UPDATE_FINISH_CORRIDOR, UPDATE_READERS, FINISH_CORRIDOR_UPDATING_PAUSED } from '../types/FinishCorridorTypes'

const INITIAL_STATE = {
  capturesList: [],
  readers: [],
  listIsActivelyUpdating: true
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_READERS:
      return {
        ...state,
        readers: [...action.payload],
        listIsActivelyUpdating: true

      }
    case UPDATE_FINISH_CORRIDOR:
      return {
        ...state,
        capturesList: [...action.payload, ...state.capturesList]
      }
    case FINISH_CORRIDOR_UPDATING_PAUSED:
      return {
        ...state,
        listIsActivelyUpdating: false
      }
    default:
      return state
  }
}
