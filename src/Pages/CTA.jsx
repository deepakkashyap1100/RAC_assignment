import { useEffect, useState } from "react";
// import ctaImg from "../images/rac/cta.jpg";
const CTA = () => {
  const [posts, setPosts] = useState([]);
  const [mediaImages, setMediaImages] = useState({});

  const fetchWordpressPosts = async () => {
    try {
      const apiResponse = await fetch(
        "http://localhost/wordpressRestAPI/wp-json/wp/v2/cta",
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      const listPost = await apiResponse.json();
      setPosts(listPost);
      //   ---feateure-media-fun-calling----
      const featureMediaImages = await fetchWordpressMediaImages(listPost);
      setMediaImages(featureMediaImages);
    } catch (error) {
      console.log(error);
    }};

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
            // console.log(apiData,'media images')
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
//   console.log(posts, "pages");

  return (
    <>
      {posts.map((post) => {
        return (
          <>
            <section className="cta"  style={{ backgroundImage: `url(${mediaImages[post.id]}`}}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6"></div>
                  <div className="col-lg-6 col-12">
                    <div className="cta-form">
                      <h2
                        className="lg:text-4xl text-xl font-bold mb-5 text-gray-900"
                        dangerouslySetInnerHTML={{
                          __html: post.title.rendered,
                        }}
                      ></h2>

                      <textarea
                        name=""
                        id="cta-input"
                        rows={4}
                        placeholder="Kindly Describe your Requirement"
                      ></textarea>
                      <div className="cta-button">Submit</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}
    </>
  );
};

export default CTA;