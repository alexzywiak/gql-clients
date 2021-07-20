import { useQuery } from "urql";
import "./App.css";
import Post from "./Post";

const PostsQuery = `
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
  const [result] = useQuery({
    query: PostsQuery,
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <ul className="list-group content">
      {data?.posts?.map(
        (post: any) => post && <Post key={post.id} post={post} />
      )}
    </ul>
  );
}

export default App;
