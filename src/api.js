
const API_KEY = 'K8Rs1hpt0EpEADC8tfxnzqOEDedIedbF'

export default function apiGifs(keyword) {

  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=9&offset=0&rating=g&lang=en`


  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      const gifs = data.map(image => {
        const { id, title, images } = image
        const { url } = images.original

        return { id, url, title }

      }
      )
      console.log(gifs)

      return gifs
    })

}