import { useState, useEffect } from "react";
import { PostInterface, Accumulator } from "../types/Post.interface";

const ServerDataFetch = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Loading failed");
        setIsLoading(false);
      });
  }, []);

  const userPosts = posts.reduce((acc: Accumulator, post: PostInterface) => {
    if (!acc[post.userId]) {
      acc[post.userId] = [];
    }
    acc[post.userId].push(post);
    return acc;
  }, {});

  console.log("User posts data rendered");
  //console.log(posts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <h2>Server Data Request</h2>
      <ol>
        {Object.keys(userPosts).map((userId) => (
          <div key={userId}>
            <h3>User {userId} Posts</h3>
            <ul>
              {userPosts[Number(userId)].map((post: PostInterface) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default ServerDataFetch;
