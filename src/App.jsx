import { useState, useEffect } from "react";
import CreatePostModal from "./components/CreatePostModal.jsx";
import Posts from "./components/Posts.jsx";

function App() {

  // const [, setRefresh] = useState([]);

  const [posts, setPosts] = useState([])

  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(response => response.json())
      .then(data => {
          setPosts(Object.values(data))
      })
  }, [])

  const addPostSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const postData = Object.fromEntries(formData);

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then((data) => {
      const newPost = { ...data, id: Date.now() }
      setPosts(prevPosts => [...prevPosts, newPost])
      event.target.reset();
    })
    .catch(err => alert(err.message))
  }
  
  return (
    <div>
      <Posts posts={posts} />
      <CreatePostModal 
      onSubmit={addPostSubmitHandler}
      />
    </div>
  )
}

export default App
