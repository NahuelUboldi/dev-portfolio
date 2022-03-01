import './App.css';
import About from './components/About';
import Header from './components/Header';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
