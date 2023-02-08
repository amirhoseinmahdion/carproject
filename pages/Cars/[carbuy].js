import { useRouter } from 'next/router';
import carsData from '@amirmahdion/data/Carsdata';
import OnedetilesC from '@amirmahdion/components/templates/OnedetilesC';

const BuyOnecar = () => {
    const router = useRouter();
    const carId = router.query.carbuy;
    const detilecar = carsData[carId - 1]
   
    return (
        <div>
            <OnedetilesC data={detilecar}/>
        </div>
    );
};

export default BuyOnecar;