/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPosts
// ====================================================

export interface GetPosts_posts_author {
  __typename: "Person";
  firstName: string | null;
  lastName: string | null;
}

export interface GetPosts_posts {
  __typename: "Post";
  id: string | null;
  body: string | null;
  author: GetPosts_posts_author | null;
}

export interface GetPosts {
  posts: (GetPosts_posts | null)[] | null;
}
