import React from 'react'
import PropTypes from 'prop-types'

import TableCell from '@material-ui/core/TableCell'
import withStyles from '@material-ui/core/styles/withStyles'
import { VirtualizedTableStyles } from '../styles/VirtualizedTable.styles'

const VirtualizedColumn = (options) => {
  const { cellData, classes } = options

  return (
    <TableCell
      component="div"
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

export default withStyles(VirtualizedTableStyles)(VirtualizedColumn)
