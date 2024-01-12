import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { ApartmentProvider } from './contexts/ApartmentContext';
import { PaymentsProvider } from './contexts/PaymentsContext';
import { SearchProvider } from './contexts/SearchContext';
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ApartmentProvider>
      <PaymentsProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </PaymentsProvider>
    </ApartmentProvider>
  </BrowserRouter>,
);
