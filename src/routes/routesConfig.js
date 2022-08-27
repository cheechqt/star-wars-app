import PeoplePage from "@containers/PeoplePage";
import PersonPage from "@containers/PersonPage";
import HomePage from "@containers/HomePage";
import NotFoundPage from "@containers/NotFoundPage";
import FavoritesPage from "@containers/FavoritesPage";
import SearchPage from "@containers/SearchPage";
import ErrorMessage from "@components/ErrorMessage";

const routesConfig = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/people',
    element: <PeoplePage />
  },
  {
    path: '/favorites',
    element: <FavoritesPage />
  },
  {
    path: '/search',
    element: <SearchPage />
  },
  {
    path: '/people/:id',
    element: <PersonPage />
  },
  {
    path: '/not-found',
    element: <NotFoundPage />
  },
  {
    path: '/fail',
    element: <ErrorMessage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]

export default routesConfig;