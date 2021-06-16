import { lazy } from "react";

const Home = lazy(() => import("./home"));
const Error404 = lazy(() => import("./error404"));
const NewMovies = lazy(() => import("./new-movies"));
const TopMovies = lazy(() => import("./top-movies"));
const Search = lazy(() => import("./search"));
const Movie = lazy(() => import("./movie"));

export default {
  Home,
  Error404,
  NewMovies,
  TopMovies,
  Search,
  Movie,
};
