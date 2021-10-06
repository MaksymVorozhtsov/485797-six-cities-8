import Tab from './tab';

function Tabs(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <Tab city='Paris'/>
          <Tab city='Cologne'/>
          <Tab city='Brussels'/>
          <Tab city='Amsterdam'/>
          <Tab city='Hamburg'/>
          <Tab city='Dusseldorf'/>
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
