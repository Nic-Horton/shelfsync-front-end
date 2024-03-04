// import {Routes, Route} from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import HomePage from './components/homePage/HomePage';
// import Navbar from './components/navbar/Navbar';
import SignInPage from './components/signinPage/SignInPage';
import SignUpPage from './components/signupPage/SignUpPage';
import Inventory from './components/inventory/Inventory';
import Stats from './components/stats/Stats';
import Settings from './components/settings/Settings';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "dashboard",
    element: <HomePage/>,
    children: [
      {
        path: "",
        element: <Inventory />,
      },
      {
        path: "stats",
        element: <Stats/>,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignInPage/>,
  },
  {
    path: "/signup",
    element: <SignUpPage/>,
  },
]);

function App() {

  return (
    <>
      {/* <Navbar/> */}
      <RouterProvider router={router} />
      {/* <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/signin" element={<SignInPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes> */}
    </>
  )
}

export default App
