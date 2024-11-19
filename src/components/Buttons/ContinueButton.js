'use client'

import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ContinueButton ( {
    text,
    rota
} ) {
    ContinueButton.propTypes = {
        text: PropTypes.string.isRequired,
        rota: PropTypes.string.isRequired
    }

    return (
        <Button
            type="submit"
            variant="contained"
            sx={ { mx: 'auto', width: '100%', mb: 2 } }
            disableElevation
            endIcon={ <ArrowForwardIcon /> }
            href={ rota }
        >
            { text }
        </Button>
    )
}
