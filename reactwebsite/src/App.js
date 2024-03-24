import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/home/Home';
import ErrorPage from './component/home/ErrorPage';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element : <Home />,
      errorElement : <ErrorPage />
    },
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
