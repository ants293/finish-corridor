import VirtualizedTable from "../shared/VirtualizedTable/VirtualizedTable";
import React, { useEffect, useRef } from "react";
import { MapFinishCorridor } from "./MapFinishCorridor";

const FinishCorridor = (props) => {
    const { capturesList, readers, setReadersWatcher, setCapturesWatcher } = props;
    const finishLineReaderId = readers.length ? readers[1].id : null;
    const mappedCapturesList = MapFinishCorridor(capturesList, finishLineReaderId);
    const mounted = useRef();

    useEffect(() => {
        if(!mounted.current) {
            mounted.current = true;
            setReadersWatcher();
            setCapturesWatcher();
        }
    });

    return (
        <VirtualizedTable
            options={{
                list: mappedCapturesList,
                rowHeight: 20,
                headerHeight: 20
            }}
        />
    )
};

export default FinishCorridor;
