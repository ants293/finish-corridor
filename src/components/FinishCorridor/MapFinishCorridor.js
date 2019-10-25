export const MapFinishCorridor = (timingsList, finishLineReader) => {
    let newList = [];

    if (!finishLineReader || !timingsList.length) {
        return timingsList;
    }

    for (let capture of timingsList) {
        const foundCaptureArrayIndex = findAthleteInPresentList(newList, capture.athlete.number);
        const finalCaptureTime = getCurrentCaptureTime(capture);

        if(foundCaptureArrayIndex === -1) {
            newList.push(giveCaptureRelevantTimeValue(capture, finalCaptureTime));
        } else {
            if (finalCaptureTime) {
                newList[foundCaptureArrayIndex] = giveCaptureRelevantTimeValue(capture, finalCaptureTime);
            }
        }
    }

    function getCurrentCaptureTime(capture) {
        return capture.reader_id === finishLineReader ? capture.captured : null;
    }

    return orderList(newList).map(item =>  {
        return setTableRowInfo(item);
    });

};

const orderList = (list) => {
    return list.sort((a, b) => {
        if(!b.captured) {
            return 1;
        }
        return new Date(a.captured) - new Date(b.captured);
    })
};

const giveCaptureRelevantTimeValue = (capture, finalCaptureValue) => {
    return {
        ...capture,
        captured: finalCaptureValue
    }
};

const findAthleteInPresentList = (newList, athleteNumber) => {
    return newList.findIndex(x => x.athlete.number === athleteNumber);
};

const setTableRowInfo = (item) => {
    return {
        number: item.athlete.number,
        name: item.athlete.name,
        time: item.captured,
    };
};
