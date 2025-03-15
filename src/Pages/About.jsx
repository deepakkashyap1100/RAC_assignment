import aboutImg from "../images/rac/img1.png";
const About = () => {
  return (
    <>
      <section className="about">
        <div className="ab-title">
          <div className="container">
            <p className="text-center min-title">
              Quality & innovation delivered
            </p>
            <h2 className="text-center lg:text-3xl text-xl font-medium mb-5 text-gray-900 ">About Us</h2>
          </div>
        </div>
        <div className="container py-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto">
            <div className="100 lg:col-span-2 col-auto  shadow-slate-300"> 
              <p>
                Established in the year of 1998, We “RAC Extrusions Limited”
                are Manufacturer of an Aluminium Profile, Aluminum Section,
                Aluminium Pipe, Aluminium Sheet, Solar Panel Mounting Structure,
                Aluminum Products, Aluminum Extrusions, Aluminium Rods, Aluminum
                Channels, Aluminium Busbar, Aluminium Flat Bar, Solar Panel
                Stand, Aluminum Fin, Aluminium Angles, Aluminium Mesh, Aluminium
                Partition, Aluminium Heat Sink, Aluminium Composite Panel,
                Extrusion Dies, Aluminum Ladder, etc. We direct all our
                activities to cater the expectations of customers by providing
                them excellent quality products as per their gratification.
              </p>
              <p>
                For our accomplishment story, we are grateful to our Mr. Shiv
                Kumar Mittal, whose continual backing and direction have been
                useful to us for attaining exponential development in the
                current market.
              </p>
            </div>
            <div className=" mx-auto">
              <img src={aboutImg} alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
