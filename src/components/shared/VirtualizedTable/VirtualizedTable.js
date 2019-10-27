import React from 'react'
import { AutoSizer, Column, Table } from 'react-virtualized'
import PropTypes from 'prop-types'
import VirtualizedColumn from './VirtualizedColumn/VirtualizedColumn'
import VirtualizedHeader from './VirtualizedHeader/VirtualizedHeader'

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
        <Column
          label={columnKey}
          dataKey={columnKey}
          key={columnKey}
          width={200}
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
    }
  }

  return columns
}

VirtualizedTable.propTypes = {
  options: PropTypes.shape({
    list: PropTypes.array.isRequired,
    headerHeight: PropTypes.number.isRequired,
    rowHeight: PropTypes.number.isRequired
  })
}
