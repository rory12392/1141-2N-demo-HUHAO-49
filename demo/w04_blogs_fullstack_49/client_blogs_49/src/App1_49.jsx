import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomeLayoutPage_49, HomePage_49, BlogStaticPage_49 } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutPage_49 />,
    children: [
      {
        index: true,
        element: <HomePage_49 />,
      },
      {
        path: 'static_49',
        element: <BlogStaticPage_49 />,
      },
    ],
  },
]);

const App_49 = () => {
  return <RouterProvider router={router} />;
};

export default App_49;
