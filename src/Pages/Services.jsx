import { useEffect, useState } from "react";

// import { serviceArray } from "../data/localData";
const Services = () => {
  const [posts, setPosts] = useState([]); 
  const [mediaImages, setMediaImages] = useState({});
  const fetchWordpressPosts = async () => {
    try {
      const apiResponse = await fetch(
        "http://localhost/wordpressRestAPI/wp-json/wp/v2/services",
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
      <section className="pt-5 services">
        <div className="container">
          <p className="min-title text-center">
            The Best A Grade Commercial & Residential Services
          </p>
          <h2 className="lg:text-3xl text-xl font-medium mb-5 text-gray-900 text-center">
            High Quality Aluminum Solutions for all Industries
          </h2>
          <div className="row">
          {posts.map((post)=>{
            return (
              <>
              <div className="col-lg-6 col-12 mb-5" key={post.id}>
              <div className="service-card">
                <div className="card-text"> 
                  <h3>{post.title.rendered}</h3>
                  {/* <div  dangerouslySetInnerHTML={{__html: post.content.rendered}}></div> */}
                  <div className="card-btn">
                    <a className="nav-link" href="/contact">
                      Know More
                    </a>
                  </div>
                </div>
                <div className="card-img">
                  <img src={mediaImages[post.id]} alt={post.featured_media} />
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
