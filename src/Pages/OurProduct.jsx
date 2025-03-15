import productBanner from "../images/rac/banner4.jpg";
import { FaAngleRight } from "react-icons/fa";
import CTA from "./CTA";
import { products } from "../data/localData";
const OurProduct = () => {
  const productBG = {
    width: "100%",
    height: "300px",
    backgroundImage: `url(${productBanner})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      <section className="our-product">
        <div className="full-banner" style={productBG}>
          <h2 className="pro-title text-center lg:text-6xl text-xl font-bold text-white">
            Products
          </h2>
        </div>
        <div className="container py-5">
          <div className="row">
            {products.map((ele) => {
              return (
                <>
                  <div className="col-lg-4 col-md-6 col-12 mb-5" key={ele.id}>
                    <div className="our-product-box">
                      <div className="pro-img-box">
                        <img src={ele.proImage} alt="" className="img-fluid" />
                      </div>
                      <h5 className="pt-4 text-center pb-3">{ele.proTitle}</h5>
                      <div className="divider2"></div>
                      <div className="explore-btn ">
                        <span>Explore More</span>
                        <FaAngleRight className="ms-2 arrow-icon" />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <CTA />
      </section>
    </>
  );
};

export default OurProduct;
