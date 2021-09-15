const fetchData = (link)=>{
  return fetch(link)
  .then((res) => res.json())
  .then((data) => data.results === undefined ? data : data.results)
  .then((data) =>
    data.map((elm) => ({
      id: elm.id,
      description: elm.alt_description,
      url: elm.urls.regular,
    }))
  )
  .then((data) => data)
  .catch((err) => err.message);
}
const data = (link) => {
  if(Boolean(link) === false){
      link = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`
      return fetchData(link)
    }else{
      link = `https://api.unsplash.com/search/photos?query=${link}&client_id=${process.env.REACT_APP_API_KEY}`
      return fetchData(link)
    }
};
export default data;
