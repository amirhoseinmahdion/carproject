
import Categories from '@amirmahdion/components/module/Categories';
import Searchcars from '@amirmahdion/components/module/Searchcars';
import Carsdetiles from '@amirmahdion/components/templates/Carsdetiles';
import carsData from '@amirmahdion/data/Carsdata';




const carsdetiles = () => {
   
    return (
        <div>
          <Searchcars/>
          <Categories/>
          
          <Carsdetiles data={carsData}/>
        </div>
    );
};

export default carsdetiles;