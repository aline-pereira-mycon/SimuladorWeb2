'use client';

import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';

const BackButton = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back(); // Navega para a página anterior
    };

    return (
        <Button
            onClick={ handleBack }
            disableElevation
            className="back-btn"
        >
            <ArrowBackIcon />
        </Button>

    );
};

export default BackButton;