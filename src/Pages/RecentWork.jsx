// import React from "react";
import { recentCardArray } from "../data/localData";
import { FaAngleRight } from "react-icons/fa";
const RecentWork = () => {
  recentCardArray
  return (
    <>
      <section className="pb-5 services">
        <div className="container">
          <p className="min-title text-center">Features Porjects</p>
          <h2 className="lg:text-3xl text-xl font-medium mb-5 text-gray-900 text-center">
            Our Recent Works
          </h2>
          <div className="row">
          {recentCardArray.map((ele)=>{
            return(
              <>
              <div className="col-lg-4 col-md-6 col-12 mb-5" key={ele.id}>
              <div className="recent-card">
                <div className="rec-img-box">
                  <img src={ele.img} alt="" className="img-fluid" />
                </div> 
                <div className="recent-text">
                  <h3>{ele.title}</h3>
                  <p className="min-title">{ele.subTitle}</p>
                  <p className="para">{ele.dsc}</p>
                  <div className="divider"></div>
                  <div className="explore-btn ">
                    <span>Explore More</span>
                    <FaAngleRight className="ms-2 arrow-icon" />
                  </div>
                </div>
              </div>
            </div>
              </>
            )
          })
          }
          
           
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentWork;
