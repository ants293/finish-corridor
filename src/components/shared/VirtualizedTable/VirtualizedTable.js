import React from 'react'
import PropTypes from 'prop-types'

import { AutoSizer, Column, Table } from 'react-virtualized'
import VirtualizedColumn from './VirtualizedColumn/VirtualizedColumn'
import VirtualizedHeader from './VirtualizedHeader/VirtualizedHeader'
import withStyles from '@material-ui/core/styles/withStyles'
import { VirtualizedTableStyles } from './styles/VirtualizedTable.styles'
import 'react-virtualized/styles.css'

function VirtualizedTable ({ options, classes }) {
  const { list, headerHeight, rowHeight, columnValues, tableWidth } = options
  const columnSizes = {
    headerHeight,
    rowHeight
  }

  return (
    <div className={classes.tableWrapper} style={{  }}>
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={tableWidth || width}
            rowHeight={rowHeight}
            headerHeight={headerHeight}
            className={classes.table}
            rowCount={list.length}
            rowGetter={({ index }) => list[index]}
          >
            {createColumns(list, columnValues, columnSizes)}
          </Table>
        )}
      </AutoSizer>
    </div>
  )
}

const createColumns = (list, columnValues, columnSizes) => {
  return columnValues.map(({ dataKey, width }) => {
    return (
      <Column
        label={dataKey}
        dataKey={dataKey}
        key={dataKey}
        width={width}
        headerRenderer={headerProps => (
          <VirtualizedHeader
            headerHeight={columnSizes.headerHeight}
            label={headerProps.label}
          />
        )}
        cellRenderer = {
          ({ cellData }) => (
            <VirtualizedColumn
              cellData={cellData}
              rowHeight={columnSizes.rowHeight}
            />
          )
        }
      />
    )
  })
}

VirtualizedTable.propTypes = {
  options: PropTypes.shape({
    list: PropTypes.array.isRequired,
    headerHeight: PropTypes.number.isRequired,
    rowHeight: PropTypes.number.isRequired,
    tableWidth: PropTypes.number,
    columnValues: PropTypes.arrayOf(PropTypes.shape({
      width: PropTypes.number.isRequired,
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string
    })).isRequired
  }).isRequired
}

export default withStyles(VirtualizedTableStyles)(VirtualizedTable)
