
import Carsfilterclick from '@amirmahdion/components/templates/Carsfilterclick';
import carsData from '@amirmahdion/data/Carsdata';
import React from 'react';

const Filteritems = () => {
   
    return (
        <div>
            <Carsfilterclick data={carsData}/>
        </div>
    );
};

export default Filteritems;