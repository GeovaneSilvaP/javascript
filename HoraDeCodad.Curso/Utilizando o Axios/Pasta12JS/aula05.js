
//Post
const form = document.querySelector("#post-form")
const titleInput = document.querySelector("#title")
const bodyInput = document.querySelector("#body")

form.addEventListener("submit", (e) =>{
  e.preventDefault()
  
  axios.post("https://jsonplaceholder.typicode.com/posts", {
    
    title: titleInput.value,
    body: bodyInput.value,
    userId: 1
    
  })
})