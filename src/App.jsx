import {Routes, Route} from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import HomePage from './components/homePage/HomePage';
// import Navbar from './components/navbar/Navbar';
import SignInPage from './components/signinPage/SignInPage';
import SignUpPage from './components/signupPage/SignUpPage';


function App() {

  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/signin" element={<SignInPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes>
    </>
  )
}

export default App
