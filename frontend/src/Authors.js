import { gql, useQuery } from "@apollo/client";
import "./App.css";
import Author from "./Author";

const AUTHORS = gql`
  {
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
  const { loading, error, data } = useQuery(AUTHORS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul className="list-group content">
      {data.authors.map((author) => {
        return <Author key={author.id} author={author} />;
      })}
    </ul>
  );
}

export default App;
