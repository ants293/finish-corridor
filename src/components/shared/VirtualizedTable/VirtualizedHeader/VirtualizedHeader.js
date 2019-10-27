import React from 'react'
import PropTypes from 'prop-types'

export default function VirtualizedHeader (options) {
  const { label } = options
  return (
    <div>{label}</div>
  )
}

VirtualizedHeader.propTypes = {
  options: PropTypes.shape({
    label: PropTypes.string
  })
}
