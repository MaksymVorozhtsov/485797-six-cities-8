import Main from '../main/main';

function App(props: {numberOfPlaces: string}): JSX.Element {
  return <Main numberOfPlaces = {props.numberOfPlaces}/>;
}

export default App;
