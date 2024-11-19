'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ContinueButton from '@/components/Buttons/ContinueButton';
import SliderParcela from '@/components/Slider/SliderParcela';
import SliderCredito from '@/components/Slider/SliderCredito';

function TabsParcelas ( props ) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={ value !== index }
            id={ `simple-tabpanel-${ index }` }
            aria-labelledby={ `simple-tab-${ index }` }
            { ...other }
        >
            { value === index && <Box sx={ { p: 3 } }>{ children }</Box> }
        </div>
    );
}

TabsParcelas.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps ( index ) {
    return {
        id: `simple-tab-${ index }`,
        'aria-controls': `simple-tabpanel-${ index }`,
    };
}

export default function BasicTabs () {
    const [ value, setValue ] = React.useState( 0 );

    const handleChange = ( event, newValue ) => {
        setValue( newValue );
    };

    return (
        <Box sx={ { width: '100%' } }>
            <Box sx={ { borderBottom: 0, } }>
                <Tabs value={ value } onChange={ handleChange } aria-label="tabs parcelas e crédito">
                    <Tab label="Parcelas" { ...a11yProps( 0 ) } />
                    <Tab label="Valor do Crédito" { ...a11yProps( 1 ) } />
                </Tabs>
            </Box>
            <TabsParcelas value={ value } index={ 0 } sx={ { p: 0 } }>
                <SliderParcela />
            </TabsParcelas>
            <TabsParcelas value={ value } index={ 1 }>
                <SliderCredito />
            </TabsParcelas>
            <Box>
                <ContinueButton
                    text="continuar"
                    rota="/valores"
                />
            </Box>
        </Box>
    );
}
