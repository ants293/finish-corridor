import socketIOClient from 'socket.io-client'
import { WS_API_URL } from './Config'

const socket = socketIOClient(WS_API_URL)

const openSocketConnection = () => {
  socket.open()
}

const closeSocketConnection = () => {
  socket.close()
}

export { socket, openSocketConnection, closeSocketConnection }
