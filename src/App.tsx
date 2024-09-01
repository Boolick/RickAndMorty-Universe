import { Provider } from 'react-redux';
import store from './app/store/index';
import Card from './entities/Card/Card';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div>
        <h1>Rick and Morty</h1>
        <Card />
      </div>
    </Provider>
  );
}

export default App;
