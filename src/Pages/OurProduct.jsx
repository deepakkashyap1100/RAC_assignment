import productBanner from "../images/rac/banner4.jpg";
import { FaAngleRight } from "react-icons/fa";
import CTA from "./CTA";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const OurProduct = () => {
  const [mediaImages, setMediaImages] = useState({});
  const productData= useLoaderData();

  const fetchWordpressPosts = async () => { 
      const featureMediaImages = await fetchWordpressMediaImages(productData);
      setMediaImages(featureMediaImages);
  };

  useEffect(() => {
    fetchWordpressPosts();
  }, []);

  const fetchWordpressMediaImages = async (listofPosts) => {
    const mediaImagesArray = {};
    await Promise.all(
      listofPosts.map(async (singlePostObject) => {
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
            console.log(mediaImagesArray)
            mediaImagesArray[singlePostObject.id] = apiData.source_url;
          } catch (error) {
            console.log(error,'err');
          }
        } else {
          mediaImagesArray[singlePostObject.id] =
            "http://localhost/wordpressRestAPI/wp-content/uploads/2025/03/logo.png";
        }
      })
    );
    return mediaImagesArray;
  };

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
            {productData.map((post) => {
              return (
                <>
                  <div className="col-lg-4 col-md-6 col-12 mb-5" key={post.id}>
                    <div className="our-product-box">
                      <div className="pro-img-box">
                      <img src={mediaImages[post.id]} alt={post.featured_media} className="img-fluid" />
                      </div>
                      <h5 className="pt-4 text-center pb-3">
                        {post.title.rendered}
                      </h5>
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
