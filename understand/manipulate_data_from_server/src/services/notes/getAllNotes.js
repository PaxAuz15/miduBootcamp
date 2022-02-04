import axios from "axios"

export function getAllNotes() {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        const { data } = response
        return data
      })
}