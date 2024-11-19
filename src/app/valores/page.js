import * as React from 'react';
import Box from '@mui/material/Box';
import ButtonAppBar from '@/components/header';
import Container from '@mui/material/Container';
import PageTitle from '@/components/Titles/PageTitle';
import ValorCard from '@/components/Cards/ValorCard';
import CarImage from '../../../public/images/automovel.png';
import TabsParcelas from '@/components/Tabs/TabsParcelas';

export default function Home () {
    return (
        <>
            <ButtonAppBar />
            <Container fixed>
                <Box
                    sx={ {
                        my: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    } }
                >
                    <PageTitle title="Qual valor você precisa?" />
                    <ValorCard title="Carro" image={ CarImage } />
                    <TabsParcelas />
                </Box>
            </Container>
        </>
    );
}