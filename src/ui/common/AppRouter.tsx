import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from '../pages/SearchPage';
import ShowPage from '../pages/ShowPage';
import Header from './Header';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/show" element={<ShowPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;