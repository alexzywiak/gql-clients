import "./App.css";
import { useGetPostsQuery } from "./generated/graphql";
import Post from "./Post";

function App() {
  const [result] = useGetPostsQuery();
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <ul className="list-group content">
      {data?.posts?.map((post) => post && <Post key={post.id} post={post} />)}
    </ul>
  );
}

export default App;
