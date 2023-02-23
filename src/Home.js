import React from 'react'
import HeroSection from './Components/HeroSection';
import FeatureProduct from './Components/FeatureProduct';
import Services from './Components/Services';
import Trusted from './Components/Trusted';

const Home = () => {

  const data = {

    name : "My store",
  };
  return (
    <>
      <HeroSection myData={data}/>
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  )
};

export default Home;
