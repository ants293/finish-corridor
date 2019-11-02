import { connect } from 'react-redux'
import Component from './FinishCorridor'

import { setCapturesWatcher, setListUpdatingToPaused, setReadersWatcher } from '../../actions/FinishCorridorActions'

const mapStateToProps = (state) => {
  return {
    capturesList: state.finishCorridor.capturesList,
    readers: state.finishCorridor.readers,
    listIsActivelyUpdating: state.finishCorridor.listIsActivelyUpdating
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCapturesWatcher: () => setCapturesWatcher(dispatch),
    setReadersWatcher: () => setReadersWatcher(dispatch),
    setListUpdatingToPaused: () => setListUpdatingToPaused(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
