import socketIOClient from "socket.io-client";
import { UPDATE_FINISH_CORRIDOR } from "../types/FinishCorridorTypes";

const updateFinishCorridorList = (dispatch) => {
    const socket = socketIOClient('http://localhost:5000');
    socket.on("connect", function() {console.log("aright")});
    socket.on('readers', function(data){console.log("readers", data)});
    socket.on('captures', function(data){
        if (data.length === 1) {
            dispatch({
                type: UPDATE_FINISH_CORRIDOR,
                payload: mapRecievedCapture(data[0]),
            })
        }
    });
};

const mapRecievedCapture = (item) => {
    return {
        number: item.athlete.number,
        name: item.athlete.name,
        time: item.captured,
    };
};

export { updateFinishCorridorList }
