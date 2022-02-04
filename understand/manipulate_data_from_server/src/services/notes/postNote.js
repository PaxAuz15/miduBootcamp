import axios from "axios"

export function postNote({title,body,userId}) {
    return axios.post("https://jsonplaceholder.typicode.com/posts",{title,body,userId})
    .then(response => {
      const { data } = response
      return data
    })
}