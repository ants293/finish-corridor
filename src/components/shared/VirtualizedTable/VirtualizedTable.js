import React from 'react'
import { AutoSizer, Column, Table } from 'react-virtualized'
import PropTypes from 'prop-types'

export default function VirtualizedTable ({ options }) {
  const { list, headerHeight, rowHeight } = options

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
            {createColumns(list)}
          </Table>
        )}
      </AutoSizer>
    </div>
  )
}

const createColumns = (list) => {
  const columns = []
  const listItem = list[0]

  for (const columnKey in listItem) {
    if (listItem.hasOwnProperty(columnKey)) {
      columns.push(
        createDefaultColumn(columnKey)
      )
    }
  }

  return columns
}

const createDefaultColumn = (key) => {
  return (
    <Column
      key={key}
      width={200}
      dataKey={key}
      label={key}
    />
  )
}

VirtualizedTable.propTypes = {
  options: {
    list: PropTypes.array,
    headerHeight: PropTypes.number,
    rowHeight: PropTypes.number
  }
}
