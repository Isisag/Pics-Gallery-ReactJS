 export const api_key = "563492ad6f91700001000001abf7907093024695b4909bad840b1bef"
 const baseUrl = "https://api.pexels.com/v1/search?query=nature&orientation=landscape&per_page=1"
  
  const baseUrlTest = "https://api.pexels.com/v1/search?"
  const query = "query=nature"
  const size = "orientation=square"
  const pagination = "per_page=5"
  const color = "color=orange"

 export const getPhoto = () => `${baseUrlTest}&${query}&${size}&${pagination}`;

 export const getColor = () => `${baseUrlTest}&${query}&${size}&${pagination}&${color}`



