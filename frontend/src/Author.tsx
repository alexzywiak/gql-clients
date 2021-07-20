import { Author as AuthorType } from "./generated/graphql";
import Post from "./Post";

interface Props {
  author: AuthorType;
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
          author.posts.map((post: any) => {
            return post && <Post key={post.id} post={post} />;
          })}
      </ul>
    </li>
  );
}

export default Author;
