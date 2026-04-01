import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Impact from './Impact.jsx';
import About from './About.jsx';
import OurTeam from './OurTeam.jsx';
import CAP from './CAP.jsx';
import SAP from './SAP.jsx';
import Events from './Events.jsx';
import PastEngagements from './PastEngagements.jsx';
import OurServices from './OurServices.jsx';
import Alumni from './Alumni.jsx';

function App() {
  const location = useLocation();

  return (
    <>
    <HelmetProvider>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/Home" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/About" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/Impact" element={<PageWrapper><Impact /></PageWrapper>} />
          <Route path="/OurTeam" element={<PageWrapper><OurTeam /></PageWrapper>} />
          <Route path="/CAP" element={<PageWrapper><CAP /></PageWrapper>} />
          <Route path="/SAP" element={<PageWrapper><SAP /></PageWrapper>} />
          <Route path="/Events" element={<PageWrapper><Events /></PageWrapper>} />
          <Route path="/PastEngagements" element={<PageWrapper><PastEngagements /></PageWrapper>} />
          <Route path="/OurServices" element={<PageWrapper><OurServices /></PageWrapper>} />
          <Route path="/Alumni" element={<PageWrapper><Alumni /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      </HelmetProvider>
    </>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default App;
