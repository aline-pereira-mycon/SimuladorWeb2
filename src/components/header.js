'use client'
import * as React from 'react';
import Image from 'next/image';
import logoMycon from '../../public/images/logo-mycon.svg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid2';
import { usePathname } from "next/navigation";
import BackButton from '@/components/Buttons/BackButton';


export default function ButtonAppBar () {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <Box sx={ { flexGrow: 1 } }>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={ { flexGrow: 1 } }>
                        { !isHomePage && (
                            < BackButton />
                        ) }
                        <Grid container spacing={ 1 }>
                            <Grid size={ 12 } sx={ { display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
                                <Image
                                    src={ logoMycon }
                                    alt="Logo Mycon"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
