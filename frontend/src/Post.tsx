import { GetAuthors_authors_posts } from "./__generated__/GetAuthors";

interface Props {
  post: GetAuthors_authors_posts;
}

function Post({ post }: Props) {
  return (
    <li className="list-group-item">
      {post.id}: {post.body} {post.author ? `by ${post.author.firstName}` : ""}
    </li>
  );
}

export default Post;
