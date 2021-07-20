import "./App.css";
import Author from "./Author";
import { useGetAuthorsQuery } from "./generated/graphql";

function App() {
  const [result] = useGetAuthorsQuery();

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ul className="list-group content">
      {data?.authors?.map(
        (author) => author && <Author key={author.id} author={author} />
      )}
    </ul>
  );
}

export default App;
