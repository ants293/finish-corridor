import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import { VirtualizedTableStyles } from '../styles/VirtualizedTable.styles'
import TableCell from '@material-ui/core/TableCell'

function VirtualizedHeader (options) {
  const { label, classes } = options
  return (
    <TableCell className={classes.tableCell} >
      <Typography
        className={classes.tableHeaderCell}
        align="left"
        fontWeight={600}
      >
        {label}
      </Typography>
    </TableCell>
  )
}

VirtualizedHeader.propTypes = {
  options: PropTypes.shape({
    label: PropTypes.string
  })
}

export default withStyles(VirtualizedTableStyles)(VirtualizedHeader)
