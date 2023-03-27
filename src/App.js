import logo from './logo.svg';
import './App.css';
import Read from './component/Read';
import Create from './component/Create';

import RootLayout from './page/Root';
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ErrorPage from './page/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true, element: <Read />,
        },
        { path: '/read', element: <Read /> },
      ]
    }, {
      path: '/create',
      element: <><Create /><RootLayout /></>,


    },
  ])
  return (<>
    <RouterProvider router={router} />

  </>
  );
}

export default App;
