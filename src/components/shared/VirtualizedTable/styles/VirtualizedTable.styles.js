export const VirtualizedTableStyles = theme => ({
  tableWrapper: {
    width: 600,
    margin: '0 auto',
    height: '100vh'
  },
  table: {
    '& .ReactVirtualized__Table__rowColumn, & .ReactVirtualized__Table__headerColumn': {
      marginRight: '0px!important'
    },
    '& .ReactVirtualized__Table__headerRow': {
      paddingRight: '0!important',
      backgroundColor: theme.palette.primary.main
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
    fontWeight: 600,
    color: '#fff'
  }
})
