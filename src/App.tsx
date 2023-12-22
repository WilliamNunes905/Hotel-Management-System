import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Payments } from './components/Payments';
import { NotFound } from './components/PageNotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/payment" element={ <Payments /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
