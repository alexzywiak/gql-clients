import "./App.css";
import Post from "./Post";
import postData from "./postsData.json";

function App() {
  const { data } = postData;
  return (
    <ul className="list-group content">
      {data?.posts?.map((post) => post && <Post key={post.id} post={post} />)}
    </ul>
  );
}

export default App;
