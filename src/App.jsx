import React, { useState, useEffect } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import { Mixpanel } from './mixpanel';

const App = () => {
  const [landingPageData, setLandingPageData] = useState(JsonData);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const utm_email = urlParams.get('email');

  useEffect(() => {
    if (utm_email && utm_email !== null) {
      Mixpanel.alias(utm_email);
    };
  }, [utm_email])
  return (
    <div>
      <Navigation />
      <Header data={landingPageData && landingPageData.Header} />
      <Features data={landingPageData && landingPageData.Features} />
      <About data={landingPageData && landingPageData.About} />
      <Services data={landingPageData && landingPageData.Services} />
      <Team data={landingPageData && landingPageData.Team} />
      <Contact data={landingPageData && landingPageData.Contact} />
    </div>
  )
}

export default App;
