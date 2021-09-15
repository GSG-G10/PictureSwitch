const data = (query) => {
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_API_KEY}`)
    .then((res) => res.json())
    .then((data) => data.results)
    
}
export default data