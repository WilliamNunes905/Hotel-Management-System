/* eslint-disable react/jsx-max-depth */
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { ApartmentProvider } from './contexts/ApartmentContext';
import { PaymentsProvider } from './contexts/PaymentsContext';
import { FeedbacksProvider } from './contexts/FeedbacksContext';
import { SearchProvider } from './contexts/SearchContext';
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ApartmentProvider>
      <PaymentsProvider>
        <SearchProvider>
          <FeedbacksProvider>
            <App />
          </FeedbacksProvider>
        </SearchProvider>
      </PaymentsProvider>
    </ApartmentProvider>
  </BrowserRouter>,
);
