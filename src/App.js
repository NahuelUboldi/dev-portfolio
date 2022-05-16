import React, { useState, useEffect,Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsChevronCompactUp } from 'react-icons/bs';

//data
import projects from './data/projectsData';

//styles
import './App.css';

//components
const Header = React.lazy(() => import('./components/Header'));
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Work = React.lazy(() => import('./components/Work'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const Modal = React.lazy(() => import('./components/Modal'));
const Project = React.lazy(() => import('./components/Project'));

// import Header from './components/Header';
// import About from './components/About';
// import Skills from './components/Skills';
// import Work from './components/Work';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Modal from './components/Modal';
// import Project from './components/Project';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState('01');
  const [showScrollTopBtn, setShowScrollTopBtn] = useState(false);
  const [showMenuBtn, setShowMenuBtn] = useState(false);

  const handleModal = (number) => {
    setIsModalOpen(true);
    setCurrentProject(number);
  };

  const filteredProject = projects.filter((proy) => proy.id === currentProject);
  const { id, title, type, img, text, links, tags } = filteredProject[0];

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowScrollTopBtn(true);
      } else {
        setShowScrollTopBtn(false);
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
      <Suspense fallback={<div>Loading...</div>}>
        
        <Header />
        <main>
          <About />
          <Skills />
          <Work handleModal={handleModal} />
        </main>
        <Contact />
        <Footer />
        <AnimatePresence>
          {isModalOpen && (
            <Modal key='modal' setIsModalOpen={setIsModalOpen}>
              <Project data={{ id, title, type, img, text, links, tags }} />
            </Modal>
          )}
          {showScrollTopBtn && (
            <motion.button
              onClick={scrollToTop}
              className='btn btn-dark back-to-top fs-1 p-1'
              initial={{ opacity: 0, x: 100, rotate: 360 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: 200, rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <span class="hide-text-link">Scroll to top</span>
              <BsChevronCompactUp />
            </motion.button>
          )}
          
        </AnimatePresence>
      </Suspense>
    </div>
  );
}

export default App;
