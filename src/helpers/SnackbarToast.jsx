import React from 'react'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@mui/material'

const SnackbarToast = ({ res, handleClose, open = true, autoHideDuration = 6000, message = "Kuch likh bhai", action }) => {
    if (!!res)
        return (
            <Snackbar
                open={open}
                autoHideDuration={autoHideDuration}
                onClose={handleClose && handleClose}
                message={message}
                action={action && action}
            >
                <Alert onClose={handleClose} severity={res.success ? "success" : "error"} sx={{ width: '100%' }}>
                    {res.message || res.success && "Success"}
                </Alert>
            </Snackbar>
        )
    return "";
}

export default SnackbarToast
