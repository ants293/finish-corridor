import React from 'react'
import { AutoSizer, Column, Table } from 'react-virtualized'
import PropTypes from 'prop-types'
import VirtualizedColumn from './VirtualizedColumn/VirtualizedColumn'
import VirtualizedHeader from './VirtualizedHeader/VirtualizedHeader'

export default function VirtualizedTable ({ options }) {
  const { list, headerHeight, rowHeight, columnValues } = options

  return (
    <div style={{ height: '100vh' }}>
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            headerHeight={headerHeight}
            rowCount={list.length}
            rowGetter={({ index }) => list[index]}
          >
            {createColumns(list, columnValues)}
          </Table>
        )}
      </AutoSizer>
    </div>
  )
}

const createColumns = (list, columnValues) => {
  return columnValues.map(({ dataKey, width }) => {
    return (
      <Column
        label={dataKey}
        dataKey={dataKey}
        key={dataKey}
        width={width}
        headerRenderer={headerProps => (
          VirtualizedHeader({
            ...headerProps
          })
        )}
        cellRenderer = {
          ({ cellData }) => (
            <VirtualizedColumn
              cellData={cellData}
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
    columnValues: PropTypes.shape({
      width: PropTypes.number.isRequired,
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string
    }).isRequired
  }).isRequired
}
