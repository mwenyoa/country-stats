import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './notfound';
import {
  Header, Footer, BackToTopButton, Loading,
} from './components';
import './App.css';

function App() {
  const ListCountries = lazy(() => import('./pages/countries'));
  const ShowCountry = lazy(() => import('./pages/country'));
  return (
    <div className="h-full w-screen">
      {/* App Routes */}
      <Router>
        <Header />
        <main className="min-h-screen flex flex-col items-center">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<ListCountries />} />
              <Route path="countries/:id" element={<ShowCountry />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <BackToTopButton />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
