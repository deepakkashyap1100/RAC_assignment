// import React from "react";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
const RecentWork = () => {
    const [posts, setPosts] = useState([]); 
    const [mediaImages, setMediaImages] = useState({});
    const fetchWordpressPosts = async () => {
      try {
        const apiResponse = await fetch(
          "http://localhost/wordpressRestAPI/wp-json/wp/v2/recent_work",
          {
            method: "GET",
            headers: { "Content-type": "application/json" },
          }
        );
        const listPost = await apiResponse.json();
        setPosts(listPost);
        //---feateure-media-fun-calling----
        const featureMediaImages = await fetchWordpressMediaImages(listPost);
        setMediaImages(featureMediaImages);
      } catch (error) {
        console.log(error);
      }
    };
     useEffect(() => {
        fetchWordpressPosts();
      }, []);
      const fetchWordpressMediaImages = async (listofPosts) => {
        const mediaImagesArray = {};
        await Promise.all(
          listofPosts.map(async (singlePostObject, index) => {
            if (singlePostObject.featured_media > 0) {
              try {
                const apiResponse = await fetch(
                  "http://localhost/wordpressRestAPI/wp-json/wp/v2/media/" +
                    singlePostObject.featured_media,
                  {
                    method: "GET",
                    headers: {
                      "Content-type": "application/json",
                    },
                  }
                );
                const apiData = await apiResponse.json(); 
                mediaImagesArray[singlePostObject.id] = apiData.source_url;
              } catch (error) {
                console.log(error);
              }
            } else {
              mediaImagesArray[singlePostObject.id] =
                "http://localhost/wordpressRestAPI/wp-content/uploads/2025/03/logo.png";
            }
          })
        );
        return mediaImagesArray;
      };

 
  return (
    <>
      <section className="pb-5 services">
        <div className="container">
          <p className="min-title text-center">Features Porjects</p>
          <h2 className="lg:text-3xl text-xl font-medium mb-5 text-gray-900 text-center">
            Our Recent Works
          </h2>
          <div className="row">
          {posts.map((post)=>{
            return(
              <>
              <div className="col-lg-4 col-md-6 col-12 mb-5" key={post.id}>
              <div className="recent-card">
                <div className="rec-img-box">
                  <img src={mediaImages[post.id]} alt={post.featured_media} className="img-fluid" />
                </div> 
                <div className="recent-text">
                  <h3>{post.title.rendered}</h3>
                  <p className="min-title" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>
                  <p className="para" dangerouslySetInnerHTML={{__html: post.content.rendered}}></p>
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
