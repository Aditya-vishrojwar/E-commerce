import React from 'react'
import { mainCarouselData} from './MainCaroselDeta'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';


const MainCrosel = () => {

    const items = mainCarouselData.map((item)=> <img className='cursor-pointer'
    role='presention' src={item.image} alt=""/>)

  return (
        <AliceCarousel
            items={items}
            autoPlay
            autoPlayInterval={1000}
            infinite
            disableButtonsControls
/>
  )
}

export default MainCrosel;