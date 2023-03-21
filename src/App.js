import logo from './logo.svg';
import './App.css';

import Navbar from './Component/Navbar';
import Section1 from './Component/Section1';
import Section2 from './Component/Section2';
import Section3 from './Component/Section3';
import Section4 from './Component/Section4';
import Section5 from './Component/Section5';
import Section6 from './Component/Section6';
import Section7 from './Component/Section7';
import Section8 from './Component/Section8';
import Registration_using_Auth0 from './Component/Registration_using_Auth0';
import Responsive_navbar from './Component/Responsive_navbar';

function App() {
  return (
    <div className="App">
      {/* <Registration_using_Auth0/> */}
      {/* <Navbar/> */}
           
      {/* <Responsive_navbar/> */}
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
    </div>
  );
}

export default App;
