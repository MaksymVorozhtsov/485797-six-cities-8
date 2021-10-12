import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Error404 from '../error/error';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Main from '../main/main';
import Property from '../property/property';

function App(props: {numberOfPlaces: string}): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main numberOfPlaces = {props.numberOfPlaces}/>
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <Route exact path={AppRoute.Favorites}>
          <Favorites />
        </Route>
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
