import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom';

import './App.module.scss';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={'main page'} />),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
