import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Page from './components/main/Page';
import Error from './components/error-profiles/Error';
import Profiles from './components/error-profiles/Profiles';
import Profile from './components/error-profiles/Profile';
import StateExample from './components/hooks/StateExample';
import RefExample from './components/hooks/RefExample';
import MemoExample from './components/hooks/MemoExample';
import Drinks from './components/drinks/Drinks';
import BarREChart from './components/rechart/barchart/BarReChart';
import LineReChart from './components/rechart/areachart/LineReChart';
import PieReChart from './components/rechart/piechart/PieReChart';
import Position from './components/positions/Position';
import Test from './components/hoover/Test';


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
  },
  {
    path: "/ref",
    element: <RefExample />
  },
  {
    path: "/memo",
    element: <MemoExample />
  },
  {
    path: "/drinks",
    element: <Drinks />
  },
  {
    path: "/barchart",
    element: <BarREChart />
  },
  {
    path: "/linechart",
    element: <LineReChart />
  },
  {
    path: "/piechart",
    element: <PieReChart/>
  },
  {
    path: "/position",
    element: <Position/>
  },
  {
    path: "/hover",
    element: <Test/>
  },
]);

function App() {
  return (    
    <RouterProvider router={router} />
  );
}

export default App;