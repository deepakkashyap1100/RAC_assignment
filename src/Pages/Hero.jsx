import { FaAngleRight } from "react-icons/fa6";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import mynextimage from "../images/rac/mynextimage.png";
import myprevimage from "../images/rac/myprevimage.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const [posts, setPosts] = useState([]);
  const [mediaImages, setMediaImages] = useState({});
  const fetchWordpressPosts = async () => {
    try {
      const apiResponse = await fetch(
        "http://localhost/wordpressRestAPI/wp-json/wp/v2/slider",
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
  const options = {
    dots: false,
    nav: true,
    autoplay: false,
    mouseDrag: false,
    smartSpeed: 1000,
    animateOut: "fadeOut",
    loop: true,
    // animateIn: 'flipInX',
    items: 1,
    // margin:30,
    // stagePadding:30,
    navText: [`<img src= ${myprevimage}>`, `<img src= ${mynextimage}>`],
  };
  // console.log(posts, 'post');
  // console.log(mediaImages)
  return (
    <>
      <section className="hero-banner">
        <OwlCarousel className="owl-theme" {...options}>
          {posts.map((post) => {
            return (
              <>
                <div
                  className="item banner-bg"
                  style={{ backgroundImage: `url(${mediaImages[post.id]}`, backgroundColor: '#666' }}
                  key={post.id}
                >
                  <div className="container  py-5 ">
                    <div className="grid lg:grid-cols-3  grid-cols-1 gap-4  ">
                      <div className=" col-auto lg:col-span-2">
                        <h1 className=" text-white">{post.title.rendered}</h1>
                        <p
                          className=" text-white pt-4"
                          dangerouslySetInnerHTML={{
                            __html: post.content.rendered,
                          }}
                        ></p>
                        <div className="grid lg:grid-cols-4  grid-col-1 gap-3">
                          <div className="mt-4 banner-btn1 d-flex align-items-center">
                            <a href="">Know More</a>
                          </div>
                          <div className="mt-4  banner-btn2">
                            <a
                              href="#"
                              className=" justify-content-center  d-flex align-items-center"
                            >
                              View Products{" "}
                              <FaAngleRight className="ms-2" size={15} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </OwlCarousel>
      </section>
    </>
  );
};

export default Hero;
