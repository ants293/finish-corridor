import VirtualizedTable from '../shared/VirtualizedTable/VirtualizedTable'
import React, { useEffect, useRef } from 'react'
import { MapFinishCorridor } from './MapFinishCorridor'
import PropTypes from 'prop-types'
import { isTabInactive, visibilityChange } from '../../Utilities/TabVisiblityHandler'
import { closeSocketConnection, openSocketConnection } from '../../config/Websocket'

const FinishCorridor = (props) => {
  const { capturesList, readers, setReadersWatcher, setCapturesWatcher } = props
  const finishLineReaderId = readers.length ? readers[1].id : null
  const mappedCapturesList = MapFinishCorridor(capturesList, finishLineReaderId)
  const mounted = useRef()

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true

      setReadersWatcher()
      setCapturesWatcher()
      document.addEventListener(visibilityChange, changeInTabVisiblity)
    }
    return () => {
      document.removeEventListener(visibilityChange, changeInTabVisiblity)
    }
  })

  return (
    <VirtualizedTable
      options={{
        list: mappedCapturesList,
        rowHeight: 20,
        headerHeight: 20
      }}
    />
  )
}

FinishCorridor.propTypes = {
  capturesList: PropTypes.array,
  readers: PropTypes.array,
  setReadersWatcher: PropTypes.func,
  setCapturesWatcher: PropTypes.func
}

const changeInTabVisiblity = () => {
  const inactiveTab = isTabInactive()

  inactiveTab ? closeSocketConnection() : openSocketConnection()
}

export default FinishCorridor
