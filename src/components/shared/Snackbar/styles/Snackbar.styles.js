import makeStyles from '@material-ui/core/styles/makeStyles'

const SnackbarStyles = makeStyles(theme => ({
  info: {
    backgroundColor: theme.palette.primary.main
  },
  icon: {
    fontSize: 20,
    verticalAlign: 'middle'
  },
  message: {
    paddingLeft: 10,
    verticalAlign: 'middle'
  }
}))

export { SnackbarStyles }
