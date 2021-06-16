import pages from "../pages";
import {
  PATH_HOME,
  PATH_NEW_MOVIES,
  PATH_TOP_MOVIES,
  PATH_SEARCH,
  PATH_MOVIE,
  PATH_ERROR_404,
} from "./paths";

const PAGE_HOME = {
  component: pages.Home,
  path: PATH_HOME,
  exact: true,
};
const PAGE_NEW_MOVIES = {
  component: pages.NewMovies,
  path: PATH_NEW_MOVIES,
  exact: true,
};
const PAGE_TOP_MOVIES = {
  component: pages.TopMovies,
  path: PATH_TOP_MOVIES,
  exact: true,
};
const PAGE_SEARCH = {
  component: pages.Search,
  path: PATH_SEARCH,
  exact: true,
};
const PAGE_MOVIE = {
  component: pages.Movie,
  path: PATH_MOVIE,
  exact: true,
};

const ERROR_404 = {
  component: pages.Error404,
  path: PATH_ERROR_404,
  exact: false,
};

export default [
  PAGE_HOME,
  PAGE_NEW_MOVIES,
  PAGE_TOP_MOVIES,
  PAGE_SEARCH,
  PAGE_MOVIE,
  ERROR_404,
];
