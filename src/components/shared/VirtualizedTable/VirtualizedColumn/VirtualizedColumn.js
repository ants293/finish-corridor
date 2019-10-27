import React from 'react'
import PropTypes from 'prop-types'

export default function VirtualizedColumn (options) {
  const { cellData } = options
  return (
    <div>{cellData}</div>
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
