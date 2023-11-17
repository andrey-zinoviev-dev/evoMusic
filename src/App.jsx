import React from 'react';
import './App.css';

const Welcome = React.lazy(() => import('./Welcome'));
// import Welcome from './Welcome';

const Offer = React.lazy(() => import('./Offer'))
// import Offer from "./Offer";
const Advantages = React.lazy(() => import('./Advantages'));
// import Advantages from './Advantages';
const Navigation = React.lazy(() => import('./Navigation'));
// import Navigation from './Navigation';

// import Promo from './Promo';
const Gallery = React.lazy(() => import('./Gallery'));
// import Gallery from './Gallery';
const Students = React.lazy(() => import('./Students'));
// import Students from './Students';
const Teachers = React.lazy(() => import("./Teachers"));
// import Steps from './Steps';
const FAQ = React.lazy(() => import("./FAQ"));
// import FAQ from './FAQ';
const Conversion = React.lazy(() => import("./Conversion"));
// import Conversion from './Conversion';
const Map = React.lazy(() => import("./Map"));
// import Map from './Map';

// const Spline = React.lazy(() => import('@splinetool/react-spline'));

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
      {/* <React.Suspense fallback={""}>
        <Spline scene="https://prod.spline.design/csVpLVxG1oh5HjU0/scene.splinecode" />
      </React.Suspense> */}

      <React.Suspense fallback={""}>
        <Navigation setScrollToAdvantages={setScrollToAdvantages} setScrollToTeachers={setScrollToTeachers} setScrollToMap={setScrollToMap}></Navigation>
      </React.Suspense>
      <React.Suspense fallback={""}>
        <Welcome setScrollToConversion={setScrollToConversion} setLoadedApp={setLoadedApp}></Welcome>
      </React.Suspense>
      <React.Suspense fallback={""}>
        <Offer></Offer>
      </React.Suspense>
      <React.Suspense fallback={""}>
        <Students></Students>
      </React.Suspense>
      <React.Suspense fallback={""}>
        <Advantages scrollToAdvantages={scrollToAdvantages} setScrollToAdvantages={setScrollToAdvantages}></Advantages>
      </React.Suspense>
      <React.Suspense fallback={""}>
        <Teachers scrollToTeachers={scrollToTeachers} setScrollToTeachers={setScrollToTeachers}></Teachers>
      </React.Suspense>
      <React.Suspense fallback={""}>
        <Gallery></Gallery>
      </React.Suspense>
      <React.Suspense fallback={""}>
        <FAQ></FAQ>
      </React.Suspense>
      <React.Suspense fallback={""}>
        <Conversion scrollToConversion={scrollToConversion} setScrollToConversion={setScrollToConversion}></Conversion>
      </React.Suspense>
      <React.Suspense fallback={""}>
        <Map scrollToMap={scrollToMap} setScrollToMap={setScrollToMap}></Map>
      </React.Suspense>
      {/* <Offer></Offer>
      <Students></Students>
      <Advantages scrollToAdvantages={scrollToAdvantages} setScrollToAdvantages={setScrollToAdvantages}></Advantages> */}

      {/* <Gallery></Gallery> */}
      
      {/* <Steps></Steps> */}

      {/* <FAQ></FAQ> 
      <Conversion scrollToConversion={scrollToConversion} setScrollToConversion={setScrollToConversion}></Conversion>
      <Map scrollToMap={scrollToMap} setScrollToMap={setScrollToMap}></Map> */}
    </>
  )
}

export default App
