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
  Navigate,
  Outlet
} from "react-router-dom";
import { isAuthenticated } from '../auth';

const PrivateRoute = () => {
  const isAuth = isAuthenticated();
  return isAuth ? <Outlet /> : <Navigate to="/signin" replace />;
}

const router = createBrowserRouter([
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
  {
    element: <PrivateRoute/>,
    children: [
      {
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
        ]
      },
    ]
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
