import Header from './components/Header';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Services from './components/Services';
import ClearingProcess from './components/ClearingProcess';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Statistics />
      <Services />
      <ClearingProcess />
    </div>
  );
}

export default App;
