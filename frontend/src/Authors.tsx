import { gql, useQuery } from "@apollo/client";
import "./App.css";
import Author from "./Author";
import { GetAuthors_authors, GetAuthors } from "./__generated__/GetAuthors";

const AUTHORS = gql`
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
  const { loading, error, data } = useQuery<GetAuthors>(AUTHORS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul className="list-group content">
      {data?.authors?.map(
        (author: GetAuthors_authors | null) =>
          author && <Author key={author.id} author={author} />
      )}
    </ul>
  );
}

export default App;
