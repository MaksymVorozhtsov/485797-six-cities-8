import Header from '../UI/header';
import Tabs from '../UI/tabs';

function Error404(): JSX.Element {
  return (
    <div className="page page--gray page--main">

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Tabs />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <div className="cities__places-list places__list tabs__content">

                <h2>This is 404 page</h2>
                <p>so the requested page not exist, sorry, but please go to <a href="/">main page</a></p>

              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Error404;
