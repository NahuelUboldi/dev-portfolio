import React, { useState } from 'react';
import {AnimatePresence} from "framer-motion"
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

  const handleModal = (number) => {
    setIsModalOpen(true);
    setCurrentProyect(number);
  };

  const filteredProyect = proyects.filter((proy) => proy.id === currentProyect);
  const { id, title, type, img, text, links, tags } = filteredProyect[0];

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
          <Modal key="modal" setIsModalOpen={setIsModalOpen}>
            <Proyect data={{ id, title, type, img, text, links, tags }} />
          </Modal>
      )}
      </AnimatePresence>
    </div>
  );
}

export default App;
