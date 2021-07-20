import { useQuery } from "urql";
import "./App.css";
import Author from "./Author";

const AuthorsQuery = `
  query GetAuthors {
    authors {
      id
      firstName
      lastName
      posts {
        id
        body
        author {
          firstName
          lastName
        }
      }
    }
  }
`;

function App() {
  const [result, reexecuteQuery] = useQuery({
    query: AuthorsQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ul className="list-group content">
      {data?.authors?.map(
        (author: any) => author && <Author key={author.id} author={author} />
      )}
    </ul>
  );
}

export default App;
