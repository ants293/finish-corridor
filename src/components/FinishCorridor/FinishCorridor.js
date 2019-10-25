import VirtualizedTable from "../shared/VirtualizedTable/VirtualizedTable";
import React, { useEffect, useRef } from "react";

const FinishCorridor = (props) => {
    const { timingsList, readers, setReadersWatcher, setTimingsListWatcher } = props;
    const finalReaderId = readers.length ? readers[1].id : null;
    const finalList = mapTimingsList(timingsList, finalReaderId);
    const mounted = useRef();

    useEffect(() => {
        if(!mounted.current) {
            mounted.current = true;
            setReadersWatcher();
            setTimingsListWatcher();
        }
    });

    return (
        <VirtualizedTable
            options={{
                list: finalList,
                rowHeight: 20,
                headerHeight: 20
            }}
        />
    )
};

export default FinishCorridor;

const mapTimingsList = (timingsList, finalReader) => {

    if (!finalReader || !timingsList.length) {
        return timingsList;
    }

    let newList = [];

    for (let capture of timingsList) {
        const athleteNumber = capture.athlete.number;
        const foundCaptureIndex = findAthleteInPresentList(newList, athleteNumber);
        const finalCaptureValue = setRelevantCaptureTime(capture, finalReader);

        if(foundCaptureIndex === -1) {
            const newCapture = setNewCapturedObject(capture, finalCaptureValue);
            newList.push(newCapture);
        } else {
            if (finalCaptureValue) {
                newList[foundCaptureIndex] = setNewCapturedObject(capture, finalCaptureValue);
            }
        }

    }

    return orderList(newList).map(x =>  {
        return mapSingleItem(x);
    });
};

const orderList = (list) => {
    console.log(list);
    return list.sort((a, b) => {
        if(!b.captured) {
            return 1;
        }
        return new Date(a.captured) - new Date(b.captured);
    })
};

const setNewCapturedObject = (capture, finalCaptureValue) => {
    return {
        ...capture,
        captured: finalCaptureValue
    }
};

const setRelevantCaptureTime = (capture, finalReader) => {
    return capture.reader_id === finalReader ? capture.captured : null;
};

const findAthleteInPresentList = (newList, athleteNumber) => {
    return newList.findIndex(x => x.athlete.number === athleteNumber);
};

const mapSingleItem = (item) => {
    return {
        number: item.athlete.number,
        name: item.athlete.name,
        time: item.captured,
    };
};
