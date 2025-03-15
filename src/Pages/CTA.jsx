import ctaImg from "../images/rac/cta.jpg";
const CTA = () => {
    const ctaBanner = {
        width: "100%",
        height: "680px",
        backgroundImage: `url(${ctaImg})`, 
        display: 'flex',
        alignItems: 'center'
      };
  return (
    <>
        <section className='cta' style={ctaBanner}>
            <div className="container">
            <div className="row">
            <div className="col-lg-6"></div>
                <div className="col-lg-6 col-12">
                    <div className="cta-form">
                        <h2 className='lg:text-4xl text-xl font-bold mb-5 text-gray-900 '>Tell Us What Are You Looking For ?</h2>
                        
                        <textarea name="" id="cta-input" rows={4} placeholder='Kindly Describe your Requirement'></textarea>
                        <div className="cta-button">Submit</div>
                    </div>
                </div>
            </div>
                
            </div>
        </section>
    </>
  )
}

export default CTA