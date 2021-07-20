import "./App.css";
import Author from "./Author";
import authorsData from "./authorsData.json";

function App() {
  const { data } = authorsData;
  return (
    <ul className="list-group content">
      {data?.authors?.map(
        (author) => author && <Author key={author.id} author={author} />
      )}
    </ul>
  );
}

export default App;
