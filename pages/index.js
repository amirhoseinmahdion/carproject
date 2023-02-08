
import Buttonall from '@amirmahdion/components/module/Buttonall';
import Categories from '@amirmahdion/components/module/Categories';
import Searchcars from '@amirmahdion/components/module/Searchcars';
import Carsdetiles from '@amirmahdion/components/templates/Carsdetiles';
import carsData from '@amirmahdion/data/Carsdata';


export default function Home() {
  const cars = carsData.slice(0 , 3)
  return (
    <>
          <Searchcars/>
          <Categories/>
          <Buttonall/>
          <Carsdetiles data={cars}/>
    </>
  )
}
