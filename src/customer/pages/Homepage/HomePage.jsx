import React from 'react';
import MainCrosel from '../../components/HomeCarosel/MainCrosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel';
import { mens_kurta } from '../../../Data/mens_Kurta';
import { mens_Shoes } from '../../../Data/mens_Shoes';
import { women_dress } from '../../../Data/women_Dress';
import { women_saree } from '../../../Data/women_Saree';
import {  women_Kurta } from '../../../Data/women_Kurta';


const HomePage = () => {
  return (
    <div>
        <MainCrosel/>
        
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"}/>
            <HomeSectionCarosel  data={mens_Shoes} sectionName={"Men's Shoes"}/>
            <HomeSectionCarosel  data={women_Kurta} sectionName={"Women's Kurta"}/>
            <HomeSectionCarosel data={women_saree}  sectionName={"Women's Lengha"}/>
            <HomeSectionCarosel  data={women_dress} sectionName={"Women's Dress"}/>
            
        </div>
    </div>
  );
};

export default HomePage;