import './App.css';
import Header from './Header';
import Description from './Description';
import AboutClinic from './AboutClinic';
import Footer from './Footer';
import Droppers from './Droppers';
import OurSpecialists from './OurSpecialists';
import Reviews from './Reviews';
import Services from './Services.jsx';
import Contacts from './Contacts';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <AboutClinic />
      <Services />
      <Droppers />
      <OurSpecialists />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}
