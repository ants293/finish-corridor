import socketIOClient from "socket.io-client";
import { UPDATE_FINISH_CORRIDOR, UPDATE_READERS } from "../types/FinishCorridorTypes";
import { WS_API_URL } from "../config/Config";

const socket = socketIOClient(WS_API_URL);

const setTimingsListWatcher = (dispatch) => {
    socket.on("connect", () =>  {
        console.log("connected");
    });

    socket.on('captures', (data) => {
        if (data.length === 1) {
            dispatch({
                type: UPDATE_FINISH_CORRIDOR,
                payload: mapRecievedCapture(data[0]),
            })
        }
    });
};

const setReadersWatcher = (dispatch) => {
    socket.on('readers', (data) => {
        dispatch({
            type: UPDATE_READERS,
            payload: data,
        });
    });
};

const mapRecievedCapture = (item) => {
    return {
        number: item.athlete.number,
        name: item.athlete.name,
        time: item.captured,
    };
};

export { setTimingsListWatcher, setReadersWatcher }
