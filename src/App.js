import './App.css';
import BrandLogo from "./Components/BrandLogo";
import Cards from "./Components/Cards";
import LoginBtn from "./Components/LoginBtn";
import AboutWebSite from "./Components/AboutWebSite";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrandLogo />
        <Cards/>
        <LoginBtn/>
        <AboutWebSite/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
