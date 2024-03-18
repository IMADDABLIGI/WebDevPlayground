import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Page from './components/main/Page';
import Error from './components/error-profiles/Error';
import Profiles from './components/error-profiles/Profiles';
import Profile from './components/error-profiles/Profile';
import StateExample from './components/hooks/StateExample';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    errorElement: <Error/>
  },
  {
    path: "/profiles",
    element: <Profiles />
  },
  {
    path: "/profiles/:ID",
    element: <Profile />
  },
  {
    path: "/state",
    element: <StateExample />
  }
]);

function App() {
  return (    
    <RouterProvider router={router} />

  );
}

export default App;