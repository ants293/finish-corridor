import VirtualizedTable from "../shared/VirtualizedTable/VirtualizedTable";
import React, { useEffect, useRef } from "react";

const FinishCorridor = (props) => {
    const { timingsList, readers, setReadersWatcher, setTimingsListWatcher } = props;
    const mounted = useRef();

    useEffect(() => {
        if(!mounted.current) {
            mounted.current = true;
            setReadersWatcher();
            setTimingsListWatcher();
        }
        console.log(readers);
    });

    return (
        <VirtualizedTable
            options={{
                list: timingsList,
                rowHeight: 20,
                headerHeight: 20
            }}
        />
    )
}



export default FinishCorridor;
