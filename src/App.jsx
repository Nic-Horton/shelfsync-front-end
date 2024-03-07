// import {Routes, Route} from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import HomePage from './components/homePage/HomePage';
import SignInPage from './components/signinPage/SignInPage';
import SignUpPage from './components/signupPage/SignUpPage';
import Inventory from './components/inventory/Inventory';
import Stats from './components/stats/Stats';
import Settings from './components/settings/Settings';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import { isAuthenticated } from '../auth';

function PrivateRoute() {
  return {
    path: "/dashboard",
    element: <HomePage/>,
      children: [
        {
          path: "inventory",
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
        { path: "*", element: <Navigate to="/" replace /> },
      ],
    
  }
}

const router = createBrowserRouter([
  isAuthenticated() ? PrivateRoute() : {},
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/signin",
    element: <SignInPage/>,
  },
  {
    path: "/signup",
    element: <SignUpPage/>,
  },
  { path: "*", element: <Navigate to="/signin" replace /> },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
