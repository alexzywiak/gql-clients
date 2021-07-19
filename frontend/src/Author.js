import Post from "./Post";

function Author({ author }) {
  return (
    <li className="list-group-item">
      <h2 className="display-6">
        {author.id}: {author.firstName} {author.lastName}
      </h2>
      <div>Posts:</div>
      <ul className="list-group">
        {author.posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </ul>
    </li>
  );
}

export default Author;
