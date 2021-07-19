import "./App.css";
import Author from "./Author";
import mockData from "./authorsData.json";

function App() {
  const { data } = mockData;
  return (
    <ul className="list-group content">
      {data.authors.map((author) => {
        return <Author author={author} />;
      })}
    </ul>
  );
}

export default App;
