import "./App.css";

const mockData = {
  data: {
    authors: [
      {
        id: "1",
        firstName: "John",
        posts: [
          {
            id: "1",
            body: "Hello world",
          },
        ],
      },
      {
        id: "2",
        firstName: "Jane",
        posts: [
          {
            id: "2",
            body: "Hi, planet!",
          },
        ],
      },
    ],
  },
};

function App() {
  const { data } = mockData;
  return (
    <div className="container">
      <header>
        <h1>GQL Partay</h1>
      </header>
      <ul className="list-group content">
        {data.authors.map((author) => {
          return (
            <li className="list-group-item">
              <h2 className="display-6">
                {author.id}: {author.firstName}
              </h2>
              <div>Posts:</div>
              <ul className="list-group">
                {author.posts.map((post) => {
                  return (
                    <li className="list-group-item">
                      {post.id}: {post.body}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
