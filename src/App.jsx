import { useMemo } from 'react';
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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';

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
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#41c9df',
          },
          secondary: {
            main: '#df5941',
          },
        },
      }),
    [prefersDarkMode],
  )

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
