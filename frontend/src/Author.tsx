import Post from "./Post";
import { GetAuthors_authors } from "./__generated__/GetAuthors";

interface Props {
  author: GetAuthors_authors;
}

function Author({ author }: Props) {
  return (
    <li className="list-group-item">
      <h2 className="display-6">
        {author.id}: {author.firstName} {author.lastName}
      </h2>
      <div>Posts:</div>
      <ul className="list-group">
        {author.posts &&
          author.posts.map((post) => {
            return post && <Post key={post.id} post={post} />;
          })}
      </ul>
    </li>
  );
}

export default Author;
