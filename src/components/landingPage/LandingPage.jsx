import Hero from './Hero';
import HowItWorks from './HowitWorks';
import Copyright from '../copyright/Copyright.jsx'

const LandingPage = () => {

  return (
    <>
      <Hero/>
      <HowItWorks/>
      <Copyright style={{color:'white', paddingBottom:'10px'}}/>
    </>
  );
}

export default LandingPage