import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Housing from '../pages/Housing/Housing';
import Error from '../pages/Error/Error';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/housing/:id" element={<Layout><Housing /></Layout>} />
        <Route path="*" element={<Layout><Error /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
