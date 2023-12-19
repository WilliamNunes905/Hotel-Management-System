import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchProvider } from './contexts/SearchContext';
import { ApartmentProvider } from './contexts/ApartmentContext';

function App() {
  return (
    <ApartmentProvider>
      <SearchProvider>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="*" element={ <Home /> } />
        </Routes>
        <Footer />
      </SearchProvider>
    </ApartmentProvider>
  );
}

export default App;
