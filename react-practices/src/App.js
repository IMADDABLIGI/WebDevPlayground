import Page from './components/Page';
import About from './about/about';
import Profiles from './about/Profiles';
import Profile from './about/Profile';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    errorElement: <About/>
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/profiles",
    element: <Profiles />
  },
  {
    path: "/profiles/:ID",
    element: <Profile />
  }
]);

function App() {
  return (    
    <RouterProvider router={router} />

  );
}

export default App;