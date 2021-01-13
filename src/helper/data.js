const BASE_URL = "https://blogs-json.herokuapp.com/blogs/";
// "http://localhost:5000/blogs/";
export const data = async (params) => {
  if (params) {
    return await fetch(`${BASE_URL}${params}`).then((response) =>
      response.json()
    );
  }
  return await fetch(BASE_URL).then((response) => response.json());
};
