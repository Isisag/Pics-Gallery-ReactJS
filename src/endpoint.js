 export const api_key = "563492ad6f91700001000001fd6dc6d1dc2f449c8bf6bb18a9daae76"
//  export const api_key = "563492ad6f91700001000001abf7907093024695b4909bad840b1bef" OLD
  const baseUrl = "https://api.pexels.com/v1/search?"
  const query = "query=flower"
  const size = "orientation=square"
  const pagination = "per_page=50"

 export const getPhoto = () => `https://api.pexels.com/v1/curated?per_page=50`;
//  export const getPhoto = () => `${baseUrl}&${query}&${size}&${pagination}&${color2}`;

//  export const color = "orange"
 
 export const getColorUrl = color => `${baseUrl}&${query}&${pagination}&color=${color}`


 // test

export const Orange = () => `${baseUrl}&${query}&${size}&${pagination}&color=orange`
export const Purple = () => `${baseUrl}&${query}&${size}&${pagination}&color=purple`
export const Red = () => `${baseUrl}&${query}&${size}&${pagination}&color=red`
export const Green = () => `${baseUrl}&${query}&${size}&${pagination}&color=green`



