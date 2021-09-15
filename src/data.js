const data = (query) => {
  fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => data.results)
    .then((data) =>
      data.map((elm) => ({
        id: elm.id,
        description: elm.alt_description,
        url: elm.urls.raw,
      }))
    )
    .then((data) => data)
    .catch((err) => err.message);
};
export default data;
