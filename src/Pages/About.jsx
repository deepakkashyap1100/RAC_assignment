import { useEffect, useState } from "react";
const About = () => {
  const [posts, setPosts] = useState([]);
  const [mediaImages, setMediaImages] = useState({});
  const fetchWordpressPosts = async () => {
    try {
      const apiResponse = await fetch(
        "http://localhost/wordpressRestAPI/wp-json/wp/v2/about",
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

  // console.log(posts, "about content");
  // console.log(mediaImages, 'about')

  return (
    <>
      <section className="about">
        {posts.map((post) => {
          return (
            <>
              <div className="ab-title">
                <div className="container">
                  <p
                    className="text-center min-title"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  ></p>
                  <h2 className="text-center lg:text-3xl text-xl font-medium mb-5 text-gray-900 "  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}>
                   </h2>
                </div>
              </div>
              <div className="container py-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto">
                  <div className="100 lg:col-span-2 col-auto  shadow-slate-300">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.content.rendered
                      }}
                    ></p>
                  </div>
                  <div className=" mx-auto">
                    <img
                      src={mediaImages[post.id]}
                      alt={post.featured_media}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default About;
