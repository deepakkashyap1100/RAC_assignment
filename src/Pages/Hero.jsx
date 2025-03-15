import { FaAngleRight } from "react-icons/fa6";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import mynextimage  from '../images/rac/mynextimage.png'
import myprevimage  from '../images/rac/myprevimage.png'
import { sliderArray } from "../data/localData";

const Hero = () => { 
  const options = {
    dots: false,
    nav: true,
    autoplay: false,
    mouseDrag: false,
    smartSpeed: 1000,
    animateOut: "fadeOut",
    loop: true,
    // animateIn: 'flipInX',
    items: 1,
    // margin:30,
    // stagePadding:30,
    navText: [`<img src= ${myprevimage}>` ,`<img src= ${mynextimage}>`]
  };
  return (
    <>
    <section className="hero-banner" > 
      <OwlCarousel className="owl-theme" {...options}>
      {sliderArray.map((element)=> {
        return <>
        <div className="item banner-bg" style={element.proImage} key={element.id}> 
          <div className="container  py-5 ">
            <div className="grid lg:grid-cols-3  grid-cols-1 gap-4  ">
              <div className=" col-auto lg:col-span-2">
                <h1 className=" text-white">
                  {element.bannerTitle}
                </h1>
                <p className=" text-white pt-4">
                 {element.dsc}
                </p>
                <div className="grid lg:grid-cols-4  grid-col-1 gap-3">
                  <div className="mt-4 banner-btn1 d-flex align-items-center">
                    <a href="">Know More</a>
                  </div>
                  <div className="mt-4  banner-btn2">
                    <a  href="#"  className=" justify-content-center  d-flex align-items-center" >
                      View Products <FaAngleRight className="ms-2" size={15} />
                    </a>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
        </>
      }
      )} 
      </OwlCarousel>
    </section> 
      </>
  );
};

export default Hero;
