import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import PropTypes from 'prop-types';

export default function SliderParcela ( { isControlled } ) {
    const [ value, setValue ] = useState( 30 );

    const handleChange = ( event, newValue ) => {
        setValue( newValue );
    };

    return isControlled ? (
        <Slider
            value={ value }
            onChange={ handleChange }
            aria-label="Controlled Slider"
            min={ 0 }
            max={ 100 }
            sx={ { p: 0 } }
        />
    ) : (
        <Slider
            defaultValue={ 30 } // Apenas inicializa com 30
            aria-label="Uncontrolled Slider"
            min={ 0 }
            max={ 100 }
            sx={ { p: 0 } }
        /> )
}

SliderParcela.propTypes = {
    isControlled: PropTypes.bool.isRequired,
};

