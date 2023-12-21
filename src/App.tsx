import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchProvider } from './contexts/SearchContext';
import { ApartmentProvider } from './contexts/ApartmentContext';
import { PaymentsProvider } from './contexts/PaymentsContext';
import { Payments } from './components/Payments';
import { NotFound } from './components/PageNotFound';

function App() {
  return (
    <PaymentsProvider>
      <ApartmentProvider>
        <SearchProvider>
          <Header />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/payment" element={ <Payments /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
          <Footer />
        </SearchProvider>
      </ApartmentProvider>
    </PaymentsProvider>
  );
}

export default App;
