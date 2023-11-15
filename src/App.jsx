import React from 'react';
import Welcome from './Welcome';
import Offer from "./Offer";
import './App.css'
import Advantages from './Advantages';
import Navigation from './Navigation';
// import Promo from './Promo';
import Gallery from './Gallery';
import Students from './Students';
// import Steps from './Steps';
import FAQ from './FAQ';
import Conversion from './Conversion';
import Map from './Map';
function App() {
  //states
  const [scrollToConversion, setScrollToConversion] = React.useState(false);

  return (
    <>
      <Navigation></Navigation>
      <Welcome setScrollToConversion={setScrollToConversion}></Welcome>
      <Offer></Offer>
      <Students></Students>
      <Advantages></Advantages>
      {/* <Promo></Promo> */}
      <Gallery></Gallery>
      
      {/* <Steps></Steps> */}
      <FAQ></FAQ> 
      <Conversion scrollToConversion={scrollToConversion} setScrollToConversion={setScrollToConversion}></Conversion>
      <Map></Map>
    </>
  )
}

export default App
