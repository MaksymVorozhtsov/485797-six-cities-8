import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Error404 from '../error/error';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Main from '../main/main';
import Property from '../property/property';
import PrivateRoute from '../private-routes/private-routes';
import {PropertyType} from '../../types/offers';

type MainScreenProps = {
  numberOfPlaces: string;
  offers: PropertyType[];
}

function App({numberOfPlaces, offers}: MainScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main numberOfPlaces = {numberOfPlaces} offers = {offers} />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites offers = {offers}/>}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <Property />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
