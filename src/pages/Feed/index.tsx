import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Post from "@/components/Post";
import { getPosts } from "@/services/posts";
import { PostDetail } from "@/shared/types";
import "./Feed.css";

function Feed() {
  const [posts, setPosts] = useState<PostDetail[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      const response = await getPosts();
      setPosts(response);
      setLoading(false);
    };
    run();
  }, []);

  return (
    <div>
      <h1>Feed</h1>
      <div className="feed">
        {
          loading ? (
            <div className="loading__wrapper">
              <Loader />
            </div>
          ) : (
            <div className="feed__posts">
              {
                posts.map((post, index) => (
                  <Post key={index} data={post} />
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Feed;