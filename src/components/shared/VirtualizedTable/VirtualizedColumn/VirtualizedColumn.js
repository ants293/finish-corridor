import React from 'react'
import PropTypes from 'prop-types'

import TableCell from '@material-ui/core/TableCell'
import withStyles from '@material-ui/core/styles/withStyles'
import { VirtualizedTableMuiStyles } from '../styles/VirtualizedTableMuiStyles'

function VirtualizedColumn (options) {
  const { cellData, rowHeight, classes } = options

  return (
    <TableCell
      component="div"
      style={{ height: rowHeight }}
      className={`${classes.tableCell}`}
    >
      {cellData}
    </TableCell>
  )
}

VirtualizedColumn.propTypes = {
  options: PropTypes.shape({
    cellData: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })
}

export default withStyles(VirtualizedTableMuiStyles)(VirtualizedColumn)
