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
// const Spline = React.lazy(() => import('@splinetool/react-spline'));
// import Spline from '@splinetool/react-spline';
function App() {
  //states
  const [scrollToConversion, setScrollToConversion] = React.useState(false);
  const [scrollToAdvantages, setScrollToAdvantages] = React.useState(false);
  const [scrollToTeachers, setScrollToTeachers] = React.useState(false);
  const [scrollToMap, setScrollToMap] = React.useState(false);

  const [loadedApp, setLoadedApp] = React.useState(false);

  React.useEffect(() => {
    console.log(loadedApp);
  }, [loadedApp])

  return (
    <>
            {/* <React.Suspense fallback={<div>...ЗАГРУЗКА</div>}>
          <Spline scene="https://prod.spline.design/csVpLVxG1oh5HjU0/scene.splinecode" />

        </React.Suspense> */}
    {/* <Spline scene="https://prod.spline.design/csVpLVxG1oh5HjU0/scene.splinecode" /> */}
      <Navigation setScrollToAdvantages={setScrollToAdvantages} setScrollToTeachers={setScrollToTeachers} setScrollToMap={setScrollToMap}></Navigation>
      <Welcome setScrollToConversion={setScrollToConversion} setLoadedApp={setLoadedApp}></Welcome>
      <Offer></Offer>
      <Students></Students>
      <Advantages scrollToAdvantages={scrollToAdvantages} setScrollToAdvantages={setScrollToAdvantages}></Advantages>
      {/* <Promo></Promo> */}
      <Gallery></Gallery>
      
      {/* <Steps></Steps> */}
      <FAQ></FAQ> 
      <Conversion scrollToConversion={scrollToConversion} setScrollToConversion={setScrollToConversion}></Conversion>
      <Map scrollToMap={scrollToMap} setScrollToMap={setScrollToMap}></Map>
    </>
  )
}

export default App
