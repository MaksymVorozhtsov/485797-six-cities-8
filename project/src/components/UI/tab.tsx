function Tab(props: { city: string }): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{props.city}</span>
      </a>
    </li>
  );
}

export default Tab;
