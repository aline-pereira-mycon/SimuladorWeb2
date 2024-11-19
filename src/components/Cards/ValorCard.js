import * as React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import PropTypes from 'prop-types'

export default function ValorCard ( {
    image,
    title
} ) {
    ValorCard.propTypes = {
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }

    return (
        <Card sx={ { pb: 2, p: 0, textAlign: 'center' } }>
            <CardContent sx={ { p: 0 } }>
                <Grid container rowSpacing={ 0 } sx={ {} }>
                    <Grid size={ 12 } sx={ { mb: 3 } }>
                        <Typography sx={ { fontSize: '1.1rem', lineHeight: '1.1', color: '#00188F', fontWeight: '800' } }>
                            { title }
                        </Typography>
                    </Grid>
                    <Grid size={ 12 }>
                        <Image
                            src={ image }
                            alt="Produto"
                            className="card-image"
                        />
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    );
}
