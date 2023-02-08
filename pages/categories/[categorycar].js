import { useRouter } from 'next/router';
import React from 'react';
import carsData from '@amirmahdion/data/Carsdata';
import Cardcatgory from '@amirmahdion/components/templates/Cardcatgory';


const Categoriescars = () => {
    const router = useRouter()
    const caronedata =router.query.categorycar
  
    const datacategory = carsData.filter(car => car.category === caronedata)
   
   
    return (
        <div>
       <Cardcatgory data={datacategory}/>
  </div>
    );
};

export default Categoriescars;
