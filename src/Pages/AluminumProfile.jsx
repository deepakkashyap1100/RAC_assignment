import { AluminumList } from "../data/localData";
import AluminumBanner from "../images/rac/AluminumProfile.jpg";
import listIcon from "../images/rac/icon.png";
import listIcon2 from "../images/rac/listIcon.png";
import CTA from "./CTA";
const AluminumProfile = () => {
const AluminumBG = {
width: "100%",
height: "300px",
backgroundImage: `url(${AluminumBanner})`,
display: "flex",
alignItems: "center",
justifyContent: "center",
};
return (
<>
    <section className="our-product">
        <div className="full-banner" style={AluminumBG}>
            <h2 className="pro-title text-center lg:text-6xl text-xl font-bold text-white">
                Aluminum Profile
            </h2>
        </div>
        <div className="container py-5">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className=" text-center">
                        <h5 className='highlight-title text-center mb-3'>Premium Quality Aluminum Sections for Diverse
                            Applications</h5>
                        <p>At RAC Extrusion, we specialize in manufacturing and supplying high-quality aluminum sections
                            designed for a wide range of industrial and commercial applications. Our aluminum profiles
                            are
                            engineered with precision, durability, and strength, making them the ideal choice for
                            construction, automotive, solar energy, furniture, and other industries.</p>
                        <h5 className='highlight-title mb-3'>Why Choose Aluminum Sections?</h5>
                        <p className='font-bold'>Aluminum sections offer numerous advantages over traditional
                            materials
                            like steel and wood, including:</p>

                    </div>
                </div>
                <div className="col-12">
                <ul>
                        {AluminumList.map((ele)=>{
                            return(
                                <>
                                <li key={ele.id} className="d-flex pb-2">
                                <span>
                                <img src={listIcon} alt="" className="me-3" />
                                </span>
                                {ele.list}</li>
                                </>
                            )
                        })} 
                        </ul>

                        <div className=" text-center">
                        
                        <h5 className='highlight-title mb-3'>Our Product Range</h5>
                        <p className='font-bold'>We offer a wide variety of aluminum sections to meet the diverse needs of our clients:</p>

                        <ul>
                        {AluminumList.map((ele)=>{
                            return(
                                <>
                                <li key={ele.id} className="d-flex pb-2">
                                <span>
                                <img src={listIcon2} alt="" className="me-3" />
                                </span>
                                {ele.list}</li>
                                </>
                            )
                        })} 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <CTA/>
</>
)
}

export default AluminumProfile