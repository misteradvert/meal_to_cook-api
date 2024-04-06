import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import MainPage from './components/pages/MainPage';
import MealsPage from './components/pages/MealsPage';
import RandomMealPage from './components/pages/RandomMealPage';
import SearchMealPage from './components/pages/SearchMealPage'

function App(): JSX.Element {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/meals',
          element: <MealsPage />,
        },
        {
          path: '/randommeal',
          element: <RandomMealPage />,
        },
        {
          path: '/search',
          element: <SearchMealPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
