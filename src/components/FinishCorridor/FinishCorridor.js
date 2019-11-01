import PropTypes from 'prop-types'
import React, { useEffect } from 'react'

import VirtualizedTable from '../shared/VirtualizedTable/VirtualizedTable'
import { CreateFinishCorridorList } from './FinishCorridorList/CreateFinishCorridorList'
import { isTabInactive, visibilityChange } from '../../Utilities/TabVisiblityHandler'
import { closeSocketConnection, openSocketConnection } from '../../config/Websocket'
import { CreateFinishCorridorTableColumns } from './CreateFinishCorridorTableColumns'

const FinishCorridor = (props) => {
  const { capturesList, readers, setReadersWatcher, setCapturesWatcher } = props
  const finishLineReaderId = readers.length ? readers[1].id : null
  const mappedCapturesList = CreateFinishCorridorList(capturesList, finishLineReaderId)

  useEffect(() => {
    setReadersWatcher()
    setCapturesWatcher()
    document.addEventListener(visibilityChange, handleChangeInTabVisibility)
    return () => {
      document.removeEventListener(visibilityChange, handleChangeInTabVisibility)
    }
  }, [setCapturesWatcher, setReadersWatcher])

  return (
    <VirtualizedTable
      options={{
        columnValues: CreateFinishCorridorTableColumns,
        list: mappedCapturesList,
        rowHeight: 48,
        headerHeight: 48,
        tableWidth: 600
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

const handleChangeInTabVisibility = () => {
  const inactiveTab = isTabInactive()

  inactiveTab ? closeSocketConnection() : openSocketConnection()
}

export default FinishCorridor
