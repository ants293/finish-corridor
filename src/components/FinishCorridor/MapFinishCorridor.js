import { replaceItemInArray } from '../../Utilities/Utilities'

export const MapFinishCorridor = (initialCapturesList, finishLineReader) => {
  if (!finishLineReader || !initialCapturesList.length) {
    return initialCapturesList
  }

  const captureList = removeDuplicateEntries([...initialCapturesList], finishLineReader)

  return orderList(captureList.map(capture => {
    return mapObjectforTable(capture, finishLineReader)
  }))
}

const removeDuplicateEntries = (list, finishLineReader) => {
  let newList = []

  for (const entry of list) {
    const indexInNewArray = newList.findIndex(({athlete}) => {
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

const orderList = (list) => {
  return list.sort((a, b) => {
    if (!b.time) {
      return 1
    }
    return new Date(a.time) - new Date(b.time)
  })
}

const mapObjectforTable = (capture, finishLineReader) => {
  return {
    number: capture.athlete.number,
    name: capture.athlete.name,
    time: capture.reader_id === finishLineReader ? capture.captured : null,
    readerId: capture.reader_id
  }
}
