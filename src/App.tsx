import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { HomePage } from './pages/HomePage/HomePage';
import { store } from './app/index';

export const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Router basename="/RickAndMorty-Universe/">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
