import socketIOClient from "socket.io-client";
import { UPDATE_FINISH_CORRIDOR } from "../types/FinishCorridorTypes";

const updateFinishCorridorList = (dispatch) => {
    const socket = socketIOClient('http://localhost:5000');
    socket.on("connect", function() {console.log("aright")});
    socket.on('readers', function(data){console.log("readers", data)});
    socket.on('captures', function(data){console.log("captures", data)});

    dispatch({
        type: UPDATE_FINISH_CORRIDOR,
        payload: [{name: "payload", time: "testing"}]
    })
};

export { updateFinishCorridorList }
