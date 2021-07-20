interface Props {
  post: any;
}

function Post({ post }: Props) {
  return (
    <li className="list-group-item">
      {post.id}: {post.body} {post.author ? `by ${post.author.firstName}` : ""}
    </li>
  );
}

export default Post;
