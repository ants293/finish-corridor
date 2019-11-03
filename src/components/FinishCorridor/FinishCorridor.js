import PropTypes from 'prop-types'
import React, { Fragment, useEffect } from 'react'

import VirtualizedTable from '../shared/VirtualizedTable/VirtualizedTable'
import { CreateFinishCorridorList } from './FinishCorridorList/CreateFinishCorridorList'
import { isTabInactive, visibilityChange } from '../../utilities/TabVisiblityHandler'
import { closeSocketConnection, openSocketConnection } from '../../config/Websocket'
import { FinishCorridorTableColumns } from './FinishCorridorTableColumns'
import { GenericSnackbar } from '../shared/Snackbar/GenericSnackbar'

const FinishCorridor = (props) => {
  const {
    capturesList,
    readers,
    setReadersWatcher,
    setCapturesWatcher,
    listIsActivelyUpdating,
    setListUpdatingToPaused
  } = props

  const finishLineReaderId = readers.length ? readers[1].id : null
  const mappedCapturesList = CreateFinishCorridorList(capturesList, finishLineReaderId)
  const raceOngoing = mappedCapturesList.some(capture => capture.readerId !== finishLineReaderId)

  useEffect(() => {
    setReadersWatcher()
    setCapturesWatcher()
    document.addEventListener(visibilityChange, () => handleChangeInTabVisibility(setListUpdatingToPaused))
    return () => {
      document.removeEventListener(visibilityChange, handleChangeInTabVisibility)
    }
  }, [setCapturesWatcher, setListUpdatingToPaused, setReadersWatcher])

  return (
    <Fragment>
      <GenericSnackbar
        open={!listIsActivelyUpdating && raceOngoing}
        message={'Updating the list with current values. Please wait...'}
        variant={'info'}
      />
      <VirtualizedTable
        options={{
          columnValues: FinishCorridorTableColumns,
          list: mappedCapturesList,
          rowHeight: 48,
          headerHeight: 48,
          tableWidth: 600
        }}
      />
    </Fragment>
  )
}

FinishCorridor.propTypes = {
  capturesList: PropTypes.array.isRequired,
  readers: PropTypes.array.isRequired,
  setReadersWatcher: PropTypes.func.isRequired,
  setCapturesWatcher: PropTypes.func.isRequired,
  listIsActivelyUpdating: PropTypes.bool.isRequired,
  setListUpdatingToPaused: PropTypes.func.isRequired
}

const handleChangeInTabVisibility = (setListUpdatingToPaused) => {
  const inactiveTab = isTabInactive()

  if (inactiveTab) {
    setListUpdatingToPaused()
  }

  inactiveTab ? closeSocketConnection() : openSocketConnection()
}

export default FinishCorridor
