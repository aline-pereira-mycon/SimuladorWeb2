'use client'

import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'


export default function PageTitle ( {
    title,
    subtitle
} ) {
    PageTitle.propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string
    }

    return (
        <Box sx={ { mb: 3, textAlign: 'center' } }>
            <Typography
                variant="h1"
                sx={ { fontSize: '1.1rem', mb: 1 } }
            >
                { title }
            </Typography>
            <Typography
                sx={ { fontSize: '.8rem', lineHeight: '1.1' } }
            >
                { subtitle }
            </Typography>
        </Box> )
}
