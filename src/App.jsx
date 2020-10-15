import React, { useState } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';

const App = () => {
  const [landingPageData, setLandingPageData] = useState(JsonData);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData && landingPageData.Header} />
      <Features data={landingPageData && landingPageData.Features} />
      <About data={landingPageData && landingPageData.About} />
      <Services data={landingPageData && landingPageData.Services} />
      <Gallery />
      <Testimonials data={landingPageData && landingPageData.Testimonials} />
      <Team data={landingPageData && landingPageData.Team} />
      <Contact data={landingPageData && landingPageData.Contact} />
    </div>
  )

}

export default App;
