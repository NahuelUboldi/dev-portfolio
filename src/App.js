import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsChevronCompactUp } from 'react-icons/bs';

//data
import proyects from './data/proyectsData';

//styles
import './App.css';

//components
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Proyect from './components/Proyect';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProyect, setCurrentProyect] = useState('01');
  const [showButton, setShowButton] = useState(false);

  const handleModal = (number) => {
    setIsModalOpen(true);
    setCurrentProyect(number);
  };

  const filteredProyect = proyects.filter((proy) => proy.id === currentProyect);
  const { id, title, type, img, text, links, tags } = filteredProyect[0];

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  };

  return (
    <div className='App'>
      <Header />
      <About />
      <Skills />
      <Work handleModal={handleModal} />
      <Contact />
      <Footer />
      <AnimatePresence>
        {isModalOpen && (
          <Modal key='modal' setIsModalOpen={setIsModalOpen}>
            <Proyect data={{ id, title, type, img, text, links, tags }} />
          </Modal>
        )}
        {showButton && (
          <motion.button
            onClick={scrollToTop}
            className='btn btn-dark back-to-top fs-3 p-1 '
            initial={{ opacity: 0, x: 100, rotate: 360 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: 200, rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <BsChevronCompactUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
