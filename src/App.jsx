import {Routes, Route, useNavigate} from 'react-router-dom';
import {RouterProvider} from 'react-aria-components';
import LandingPage from './components/landingPage/LandingPage';
import HomePage from './components/homePage/HomePage';
import Navbar from './components/navbar/Navbar';
import SignInPage from './components/signinPage/SignInPage';
import SignUpPage from './components/signupPage/SignUpPage';


function App() {
  let navigate = useNavigate();

  return (
    <RouterProvider navigate={navigate}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/signin" element={<SignInPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes>
    </RouterProvider>
  )
}

export default App
