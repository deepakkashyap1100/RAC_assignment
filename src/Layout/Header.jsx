import  { useState } from "react";
import { NavLink } from "react-router-dom";
import topLogo from "../images/rac/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
//   const [IsDark, setIsDark] = useState(
//     JSON.parse(localStorage.getItem("isDarkMode"))
//   );
//   IsDark
//     ? document.body.classList.add("dark")
//     : document.body.classList.remove("dark");

//   useEffect(() => {
//     document.body.className = IsDark ? "dark-theme" : "light-theme";
//   }, [IsDark]);
const [showHide, setShowHide]= useState(false);
const [scrollDown, setScrollDown]= useState(false);
console.log(scrollDown)
  window.onscroll = function() {
    if (this.scrollY > 10) {
        setScrollDown(true);
    } else{
      setScrollDown(false);
    }
};



  return (
    <>
      <header className={`${showHide==true? 'show':'hide'}
        ${scrollDown==true?'headerfix': ''}
      `} 
        id="main-navbar"> 
        <div className="hamburger" onClick={()=> setShowHide(!showHide)}>
          <RxHamburgerMenu className="hamburger-icon" size={20}/>
        </div>
        <div className={`container mx-auto `}>
          <div className="grid lg:grid-cols-12 md:grid-flow-col grid-rows-1 items-center gap-4" >
            <div className="column lg:col-span-2  md:col-span-2  col-span-1 flex lg:justify-start">
              <div className="brand-logo">
                <NavLink to="/">
                  <img src={topLogo} alt="" className="" />
                </NavLink>
              </div>
            </div>
            <div className="menu-col column lg:col-span-2  md:col-span-2  col-span-1 flex justify-start ">
              <div className="search-box">
                <span></span>
                <input type="text" placeholder="search" />
              </div>
            </div>
            <div className="menu-col column lg:col-span-6  md:col-span-8  col-span-1 lg:mx-auto">
              <div className="navbar flex justify-center gap-4">
                <ul className="flex main-menu">
                  <li>
                    <NavLink to="/" onClick={()=>setShowHide(false) }>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="about" onClick={()=>setShowHide(false) }>About</NavLink>
                  </li>
                  <li>
                    <NavLink to="ourproduct" onClick={()=>setShowHide(false) }>Our Products</NavLink>
                  </li>
                  <li>
                    <NavLink to="catalog" onClick={()=>setShowHide(false) }>Catalog</NavLink>
                  </li> 
                  <li><NavLink to="not" onClick={()=>setShowHide(false) }>Contact Us</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="menu-col column lg:col-span-2  md:col-span-2  col-span-1 flex justify-end">
              <div className="quote-btn">
                <NavLink to="contact" className="nav-link">
                  Get a Quote
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>     
    </>
  );
};
export default Header;
