import PropTypes from 'prop-types'
import React from 'react'

import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import InfoIcon from '@material-ui/icons/Info'
import { SnackbarStyles } from './styles/Snackbar.styles'

const variantIcon = {
  info: InfoIcon
}

const GenericSnackbar = (props) => {
  const { open, message, variant } = props
  const Icon = variantIcon[variant]
  const classes = SnackbarStyles()
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={open}
    >
      <SnackbarContent
        message={
          <div>
            <Icon className={classes.icon} />
            <span className={classes.message}>
              {message}
            </span>
          </div>

        }
        className={classes[variant]}
      />
    </Snackbar>
  )
}

GenericSnackbar.propTypes = {
  message: PropTypes.string,
  open: PropTypes.bool,
  variant: PropTypes.oneOf(['info']).isRequired
}

export { GenericSnackbar }
