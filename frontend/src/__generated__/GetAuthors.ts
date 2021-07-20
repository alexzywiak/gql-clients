/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAuthors
// ====================================================

export interface GetAuthors_authors_posts_author {
  __typename: "Person";
  firstName: string | null;
  lastName: string | null;
}

export interface GetAuthors_authors_posts {
  __typename: "Post";
  id: string | null;
  body: string | null;
  author: GetAuthors_authors_posts_author | null;
}

export interface GetAuthors_authors {
  __typename: "Person";
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  posts: (GetAuthors_authors_posts | null)[] | null;
}

export interface GetAuthors {
  authors: (GetAuthors_authors | null)[] | null;
}
