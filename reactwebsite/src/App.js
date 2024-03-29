import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/home/Home';
import ErrorPage from './component/home/ErrorPage';
import Menu from './component/menu/Menu'
import Contact from './component/contact/Contact';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element : <Home />,
      errorElement : <ErrorPage />
    },
    {
      path: '/home',
      element : <Home />
    },
    {
      path: '/menu',
      element: <Menu />
    },
    {
      path: '/contact',
      element: <Contact />
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
