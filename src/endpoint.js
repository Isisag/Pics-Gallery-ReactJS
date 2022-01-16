 export const api_key = "563492ad6f91700001000001abf7907093024695b4909bad840b1bef"
 const baseUrl = "https://api.pexels.com/v1/search?query=nature&orientation=landscape&per_page=1"
  
  const baseUrlTest = "https://api.pexels.com/v1/search?"
  const query = "query=nature"
  const size = "orientation=square"
  const pagination = "per_page=1"
  const color = "color=red"

 export const getPhoto = () => `${baseUrlTest}&${query}&${size}&${pagination}&${color}`;


// import { createClient } from 'pexels';

// const client = createClient('563492ad6f91700001000001abf7907093024695b4909bad840b1bef');

// const query = 'Nature';
// //client.photos.search({ query, per_page: 1 }).then(photos => {...});

// const getPhoto = ( {query} ) => {
//     fetch(client.photos.search({ query, per_page: 1 }))
//     .then(photos => photos.json())
// }

// export default getPhoto();



// "https://api.pexels.com/v1/search?query=people"


