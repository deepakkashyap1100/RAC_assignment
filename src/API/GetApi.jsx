export const getApi = async () => {
  try {
    // const response= await fetch('https://fakestoreapi.com/products');
    const response= await fetch('http://localhost/wordpressRestAPI/wp-json/wp/v2/porducts');
    const apiData= response.json();
    // console.dir(apiData,'apidata');
    // console.log(typeof(apiData));
    return apiData;
  } catch (error) {
    console.log(error) 
  }
}
