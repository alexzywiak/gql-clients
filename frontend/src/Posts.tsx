import { gql, useQuery } from "@apollo/client";
import "./App.css";
import Post from "./Post";
import { GetPosts, GetPosts_posts } from "./__generated__/GetPosts";

const POSTS = gql`
  query GetPosts {
    posts {
      id
      body
      author {
        firstName
        lastName
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery<GetPosts>(POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul className="list-group content">
      {data?.posts?.map(
        (post: GetPosts_posts | null) =>
          post && <Post key={post.id} post={post} />
      )}
    </ul>
  );
}

export default App;
