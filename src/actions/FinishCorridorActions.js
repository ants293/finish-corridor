import { UPDATE_FINISH_CORRIDOR, UPDATE_READERS } from '../types/FinishCorridorTypes'
import { socket } from '../config/Websocket'

const setCapturesWatcher = (dispatch) => {
  socket.on('connect', () => {
    console.log('connected')
  })

  socket.on('captures', (data) => {
    dispatch({
      type: UPDATE_FINISH_CORRIDOR,
      payload: data
    })
  })
}

const setReadersWatcher = (dispatch) => {
  socket.on('readers', (data) => {
    dispatch({
      type: UPDATE_READERS,
      payload: data
    })
  })
}

export { setCapturesWatcher, setReadersWatcher }
