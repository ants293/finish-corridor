
export const VirtualizedTableMuiStyles = () => ({
  table: {
    '& .ReactVirtualized__Table__rowColumn, & .ReactVirtualized__Table__headerColumn': {
      marginRight: '0px !important'
    }
  },
  tableCell: {
    display: 'flex',
    flex: 1,
    boxSizing: 'border-box',
    alignItems: 'center'
  },
  tableHeaderCell: {
    textTransform: 'capitalize',
    fontWeight: 600
  }
})
