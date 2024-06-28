import ReactDOM from 'react-dom/client'
import Home from './Sections/Home/Home.jsx'
import ListaPeliculas from './Sections/ListaPeliculas/ListaPeliculas.jsx';
import MovieDetail from './Sections/MovieDetail/MovieDetail.jsx';
import HomeSon from './Sections/Home/HomeSon.jsx';
import { createBrowserRouter,RouterProvider, Route, Link,} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h2 className='text-custom'> Sorry error 404 , no encontre la pagina</h2>,
    children: [
      {
        path: "/",
        element: <HomeSon />
      },
      {
        path: "/comedia",
        element: <ListaPeliculas genero='comedia' key='comedia'/>
      },
      {
        path: "/independientes",
        element: <ListaPeliculas genero='independientes' key='independientes'/>
      },
      {
        path: "/clasicas",
        element: <ListaPeliculas genero='clasicas' key='clasicas'/>
      },
      {
        path:"/:genero/:titulo",
        element: <MovieDetail />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
