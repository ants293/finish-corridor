const VirtualizedTableStyles = theme => ({
  tableWrapper: {
    width: 600,
    margin: '0 auto',
    height: '100vh'
  },
  table: {
    '& .ReactVirtualized__Table__rowColumn, & .ReactVirtualized__Table__headerColumn': {
      marginRight: '0!important',
      marginLeft: '0!important'
    },
    '& .ReactVirtualized__Table__headerRow': {
      paddingRight: '0!important',
      backgroundColor: theme.palette.primary.main
    },
    '& .ReactVirtualized__Table__row': {
      paddingRight: '0!important'
    },
    '& .ReactVirtualized__Table__rowColumn:first-of-type, ': {
      marginLeft: 0
    },
    '& .ReactVirtualized__Table__rowColumn': {
      height: '100%',
      paddingTop: 3,
      paddingBottom: 3
    },
    '& .ReactVirtualized__Grid': {
      outline: 'none'
    }
  },
  tableCell: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#ececec',
    alignItems: 'center',
    height: '100%'
  },
  tableHeaderCell: {
    textTransform: 'capitalize',
    fontWeight: 600,
    color: '#fff'
  }
})

export { VirtualizedTableStyles }
