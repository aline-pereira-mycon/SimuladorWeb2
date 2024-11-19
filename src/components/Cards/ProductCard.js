import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import PropTypes from 'prop-types'

export default function ProductCard ( {
    icone,
    title,
    description
} ) {
    ProductCard.propTypes = {
        icone: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }

    return (
        <Card sx={ { pb: 2, p: 0, borderColor: 'primary.main' } } variant="outlined">
            <Link href="/leadsave">
                <CardContent>
                    <Box sx={ { width: '100%' } }>
                        <Grid container rowSpacing={ 0 } sx={ {} }>
                            <Grid size={ 12 } sx={ { mb: '3px' } }>
                                <Grid container spacing={ 1 } sx={ { alignItems: 'center' } }>
                                    <Grid size={ 2 }>
                                        <Image
                                            src={ icone }
                                            alt="Ícone"
                                        />
                                    </Grid>
                                    <Grid size={ 10 }>
                                        <Typography sx={ { fontSize: '.8rem', lineHeight: '1.1', fontWeight: '900', textTransform: 'uppercase', color: '#231D4F' } }>
                                            { title }
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size={ 12 }>
                                <Typography sx={ { fontSize: '.65rem', lineHeight: '1.1', fontStyle: 'italic', color: '#0A0D13' } }>
                                    { description }
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Link>
        </Card>
    );
}
