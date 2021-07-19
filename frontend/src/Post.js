function Post({ post }) {
  return (
    <li className="list-group-item">
      {post.id}: {post.body} by {post.author.firstName}
    </li>
  );
}

export default Post;
