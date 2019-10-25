export const MapFinishCorridor = (initialCapturesList, finishLineReader) => {
    let mappedCaptureList = [];

    if (!finishLineReader || !initialCapturesList.length) {
        return initialCapturesList;
    }

    for (let capture of initialCapturesList) {
        const foundCaptureArrayIndex = findAthleteInPresentList(capture.athlete.number);
        const finalCaptureTime = getCurrentCaptureTime(capture);
        const captureWithRelevantTimeValue = giveCaptureRelevantTimeValue(capture, finalCaptureTime);

        if(foundCaptureArrayIndex === -1) {
            mappedCaptureList.push(captureWithRelevantTimeValue);
        } else {
            // Negates the situation where some athletes wont have a time by the end of the race.
            // For some strange reason API showed some athletes who reached the finish line first and the actual corridor start last. Probably cheaters or running in the opposite direction.
            if (finalCaptureTime) {
                mappedCaptureList[foundCaptureArrayIndex] = captureWithRelevantTimeValue;
            }
        }
    }

    return orderList(mappedCaptureList).map(item =>  {
        return setCaptureInfo(item);
    });

    function getCurrentCaptureTime(capture) {
        return capture.reader_id === finishLineReader ? capture.captured : null;
    }

    function findAthleteInPresentList(athleteNumber) {
        return mappedCaptureList.findIndex(x => x.athlete.number === athleteNumber);
    }

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

const setCaptureInfo = (capture) => {
    return {
        number: capture.athlete.number,
        name: capture.athlete.name,
        time: capture.captured,
    };
};
