import moment from 'moment'

import { replaceItemInArray } from '../../../Utilities/Utilities'

export const CreateFinishCorridorList = (initialCapturesList, finishLineReader) => {
  if (!finishLineReader || !initialCapturesList.length) {
    return initialCapturesList
  }

  const captureList = orderList(createListWithRelevantEntries([...initialCapturesList], finishLineReader), finishLineReader)

  return captureList.map(capture => {
    return mapObjectforTable(capture, finishLineReader)
  })
}

const createListWithRelevantEntries = (list, finishLineReader) => {
  let newList = []

  for (const entry of list) {
    const indexInNewArray = newList.findIndex(({ athlete }) => {
      return athlete.number === entry.athlete.number
    })
    if (indexInNewArray === -1) {
      newList.push(entry)
    } else {
      if (finishLineReader === entry.reader_id) {
        newList = replaceItemInArray(newList, indexInNewArray, entry)
      }
    }
  }

  return newList
}

const orderList = (list, finishLineReader) => {
  return list.sort((a, b) => {
    // All captures with no finish line readers to the top.
    // If both dont have it, compare their dates, otherwise just compare the dates of every item that does.
    if (b.reader_id !== finishLineReader && a.reader_id === finishLineReader) {
      return 1
    } else if (a.reader_id !== finishLineReader && b.reader_id === finishLineReader) {
      return -1
    } else if (a.reader_id !== finishLineReader && b.reader_id !== finishLineReader) {
      return new Date(b.captured) - new Date(a.captured)
    }

    return new Date(a.captured) - new Date(b.captured)
  })
}

const mapObjectforTable = (capture, finishLineReader) => {
  return {
    number: capture.athlete.number,
    name: capture.athlete.name,
    time: capture.reader_id === finishLineReader ? moment(capture.captured).format('HH:mm:ss') : null,
    readerId: capture.reader_id
  }
}
