import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import LoanSolutions from './pages/LoanSolutions';
import HomeLoans from './pages/HomeLoans';
import FirstHomeBuyer from './pages/FirstHomeBuyer';
import OverseasIncome from './pages/OverseasIncome';
import SelfEmployed from './pages/SelfEmployed';
import Refinance from './pages/Refinance';
import AboutUs from './pages/AboutUs';
import Branches from './pages/Branches';
import Resources from './pages/Resources';
import FAQs from './pages/FAQs';
import Articles from './pages/Articles';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import GenericPage from './pages/GenericPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="loan-solutions" element={<LoanSolutions />} />
          <Route path="loan-solutions/home-loans" element={<HomeLoans />} />
          <Route path="loan-solutions/first-home-buyer" element={<FirstHomeBuyer />} />
          <Route path="loan-solutions/overseas-income-loans" element={<OverseasIncome />} />
          <Route path="loan-solutions/self-employed-home-loans" element={<SelfEmployed />} />
          
          <Route path="refinance" element={<Refinance />} />
          
          <Route path="about" element={<AboutUs />} />
          <Route path="about/branches" element={<Branches />} />
          
          <Route path="resources" element={<Resources />} />
          <Route path="resources/faqs" element={<FAQs />} />
          <Route path="resources/articles" element={<Articles />} />
          
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<GenericPage title="Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
