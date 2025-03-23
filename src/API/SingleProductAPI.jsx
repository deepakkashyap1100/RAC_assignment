
// import { useParams } from 'react-router-dom';
  // const singleParam= useParams();
  // console.log(singleParam,'api param');

export const singleItem = async ({params}) => {
  const id=params.detailID;
  console.log(id, 'single item from- api page')

  try {
    const response= await fetch(`https://fakestoreapi.com/products/${id}`);
    const apiData= response.json();

    // console.dir(apiData[1],'apidata');
    console.log(typeof(apiData));
    return apiData;
  } catch (error) {
    console.log(error,' error in api')  
  }
  
}
