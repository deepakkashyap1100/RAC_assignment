import { serviceArray } from "../data/localData";
const Services = () => {
  return (
    <>
      <section className="pt-5 services">
        <div className="container">
          <p className="min-title text-center">
            The Best A Grade Commercial & Residential Services
          </p>
          <h2 className="lg:text-3xl text-xl font-medium mb-5 text-gray-900 text-center">
            High Quality Aluminum Solutions for all Industries
          </h2>
          <div className="row">
          {serviceArray.map((ele)=>{
            return (
              <>
              <div className="col-lg-6 col-12 mb-5" key={ele.id}>
              <div className="service-card">
                <div className="card-text">
                  <h3>{ele.title}</h3>
                  <p>{ele.dsc}</p>
                  <div className="card-btn">
                    <a className="nav-link" href="/contact">
                      Know More
                    </a>
                  </div>
                </div>
                <div className="card-img">
                  <img src={ele.img} alt="" />
                </div>
              </div>
            </div> 
              </>
            )
          })} 
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
