import locationImg from '../images/rac/locaion.png'
import { CiMail } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'
import { MdLocalPhone } from 'react-icons/md'
const OurLocation = () => {
const bgStyle={
backgroundImage: `url(${locationImg})`
}
return (
<>
    <section className='our-location'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className='location-map-card d-flex' >

                        <div className="location-img " style={bgStyle}>
                        <div className="location-inner-card">
                        <div className='mb-4'>
                        <h5>Our Location</h5>
                        <p>49km Stone Nh10 Delhi Rohtak Road SamplaSampla - 124501, Rohtak, Haryana, India</p>
                        </div>
                           
                            <h5>Quick Contact</h5>

                            <div className="contact-detail mb-1 d-flex">
                                <div className='c-icon'>
                                    <CiMail className="me-2" />
                                </div>
                                <NavLink className=" text-white" href="mailto:Ourstudio@hello.com">
                                    Ourstudio@hello.com
                                </NavLink>
                            </div>
                            <div className="contact-detail mb-4 d-flex">
                                <div className='c-icon'>
                                    <MdLocalPhone className="me-2" />
                                </div>
                                <NavLink className=" text-white" href="tel:08047627548">
                                    08047627548
                                </NavLink>
                            </div>
                            <p className='font-semibold'>We will get back to you within 24 hours, or call us everyday
                            9:00 AM - 10 PM</p>
                        </div>
                         
                        </div>
                        <div className="google-map-img">
                            <iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=49km%20Stone%20Nh10%20Delhi%20Rohtak%20Road%20Sampla%E2%80%A8Sampla%20-%20124501,%20Rohtak,%20Haryana,%20India+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
                                    href="https://www.gps.ie/collections/drones/">buy drones</a></iframe>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className='blank'></div>
</>
)
}

export default OurLocation