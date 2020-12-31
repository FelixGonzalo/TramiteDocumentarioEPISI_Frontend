import './header.css'
import logoUns from './img/logo_uns.png'
import logoEpisi from './img/logo_episi.jpg'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="header">
      <div className="header-information">
        <img src={logoUns} alt="logo UNS" height= "30px"/>
        <h1 className="header-title">Sistema de Trámite Documentario de EPISI</h1>
        <img src={logoEpisi} alt="logo EPISI" height= "30px"/>
      </div>
      <Navbar/>
    </header>
  );
}
 
export default Header;