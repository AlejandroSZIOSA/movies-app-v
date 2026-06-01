import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import DetailsMoviePage from "./pages/DetailsMovie";
import DetailsActorPage from "./pages/DetailsActor";
import ShowMoviesInGenrePage from "./pages/ShowMoviesInGenre";
import MoviesByGenrePage from "./pages/MoviesByGenre";
import SearchPage from "./pages/Search";
import "./App.css";

import { Navigate } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <Navigate to="/home" replace /> },
        { path: "home", element: <HomePage /> },
        {
          path: "movie/:id",
          element: <DetailsMoviePage />,
        },
        {
          path: "actor/:id",
          element: <DetailsActorPage />,
        },
        {
          path: "genre/:id",
          element: <ShowMoviesInGenrePage />,
        },
        {
          path: "moviesByGenre",
          element: <MoviesByGenrePage />,
        },
        {
          path: "search",
          element: <SearchPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
