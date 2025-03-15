import { IoLocationOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { MdLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import ftLogo from '../images/rac/min-logo.png'
const Footer = () => {
return (
<>
  <footer>
    <div className="container py-5 ">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          <h5 className="mb-4 font-semibold">Get in Touch</h5>
          <div className="location d-flex">
            <div>
              <IoLocationOutline className="me-2" />
            </div>

            <div className="mb-4">
              49km Stone Nh10 Delhi Rohtak<br/> Road SamplaSampla - 124501,<br/> 
              Rohtak, Haryana, India
            </div>
          </div>
          <div className="footer-email mb-4 d-flex">
            <div>
              <CiMail className="me-2" />
            </div>
            <NavLink className=" text-white" href="mailto:Ourstudio@hello.com">
              Ourstudio@hello.com
            </NavLink> 
          </div>
          <div className="footer-email mb-4 d-flex">
            <div>
              <MdLocalPhone className="me-2" />
            </div>
            <NavLink className=" text-white" href="tel:08047627548">
              08047627548
            </NavLink> 
          </div>
          <div className="social-icon">
            <NavLink target="_blank" ><TiSocialFacebook size={20}/></NavLink>  
            <NavLink target="_blank" ><TiSocialLinkedin size={20}/></NavLink>  
            <NavLink target="_blank" ><SlSocialInstagram size={20}/></NavLink>  
          </div>
          <div className="ft-logo mt-4">
            <img src={ftLogo} alt="img-fluid" /> 
            <div className="org">Shiv Kumar Mittal (Owner)</div>
            <div className="brand-name">Rac Extrusion Limited</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <h5 className="mb-4 font-semibold">Service</h5>
          
          <ul className="footer-service p-0">
            <li><NavLink to="aluminum" className="ft-service-link">Aluminium Glass Railing</NavLink></li>
            <li><NavLink to="aluminum" className="ft-service-link">Aluminium Slim Profiles</NavLink></li>
            <li><NavLink to="aluminum" className="ft-service-link">Aluminium Profile</NavLink></li>
            <li><NavLink to="aluminum" className="ft-service-link">Aluminium Section</NavLink></li>
            <li><NavLink to="aluminum" className="ft-service-link">Solar Panel Mounting Structure</NavLink></li>
            <li><NavLink to="aluminum" className="ft-service-link">Aluminium Partition</NavLink></li>
            <li><NavLink to="aluminum" className="ft-service-link">Aluminium Sheet</NavLink></li>
            <li><NavLink to="aluminum" className="ft-service-link">Aluminium products</NavLink></li>
          
          </ul>
          
           
          </div>
          <div className="col-lg-3 col-md-6 col-12"> 
          <h5 className="mb-4 font-semibold">Service</h5>
          <ul className="footer-service p-0">
            <li><NavLink to="aluminum" className="ft-service-link">Aluminium Domal Sections</NavLink></li>
            <li><NavLink to="aluminum" className="ft-service-link">Aluminium Louvers</NavLink></li>
            <li><NavLink to="aluminum" className="ft-service-link">Aluminium Extrusions</NavLink></li> 
            <li><NavLink to="aluminum" className="ft-service-link">Aluminium Pipe</NavLink></li> 
            <li><NavLink to="aluminum" className="ft-service-link">Glass Doors</NavLink></li> 
            <li><NavLink to="aluminum" className="ft-service-link">Aluminium Heat Sinks</NavLink></li> 
            <li><NavLink to="aluminum" className="ft-service-link">Glass Wall Partition</NavLink></li> 
            <li><NavLink to="aluminum" className="ft-service-link">Aluminium Structural Glazing</NavLink></li> 
          </ul> 
          </div>
          <div className="col-lg-2 col-md-6 col-12">
          <h5 className="mb-4 font-semibold">Company</h5> 
          <ul className="footer-service p-0">
            <li><NavLink to="#" className="ft-service-link">Profile</NavLink></li>
            <li><NavLink to="#" className="ft-service-link">Testimonials</NavLink></li>
            <li><NavLink to="#" className="ft-service-link">Sitemaps</NavLink></li>
            <li><NavLink to="#" className="ft-service-link">Contact us</NavLink></li>
          </ul> 
          </div>
      </div>
    </div>
      <hr />
    <div className="container p-2">
      <p className="text-center text-white text-sm">
        {" "}
        © 2025 made by:{" "}
        <a href="" className="text-yellow-400">
          Deepak Kashyap
        </a>
      </p>
    </div>
  </footer>
</>
);
};

export default Footer;