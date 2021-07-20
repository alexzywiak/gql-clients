import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  id?: Maybe<Scalars['ID']>;
  posts?: Maybe<Array<Maybe<Post>>>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  id?: Maybe<Scalars['ID']>;
  author?: Maybe<Author>;
  body?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  posts?: Maybe<Array<Maybe<Post>>>;
  post?: Maybe<Post>;
  authors?: Maybe<Array<Maybe<Author>>>;
  author?: Maybe<Author>;
};


export type QueryPostArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryAuthorArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type GetAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthorsQuery = (
  { __typename?: 'Query' }
  & { authors?: Maybe<Array<Maybe<(
    { __typename?: 'Author' }
    & Pick<Author, 'id' | 'firstName' | 'lastName'>
    & { posts?: Maybe<Array<Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'body'>
      & { author?: Maybe<(
        { __typename?: 'Author' }
        & Pick<Author, 'firstName' | 'lastName'>
      )> }
    )>>> }
  )>>> }
);

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'body'>
    & { author?: Maybe<(
      { __typename?: 'Author' }
      & Pick<Author, 'firstName' | 'lastName'>
    )> }
  )>>> }
);


export const GetAuthorsDocument = gql`
    query GetAuthors {
  authors {
    id
    firstName
    lastName
    posts {
      id
      body
      author {
        firstName
        lastName
      }
    }
  }
}
    `;

export function useGetAuthorsQuery(options: Omit<Urql.UseQueryArgs<GetAuthorsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAuthorsQuery>({ query: GetAuthorsDocument, ...options });
};
export const GetPostsDocument = gql`
    query GetPosts {
  posts {
    id
    body
    author {
      firstName
      lastName
    }
  }
}
    `;

export function useGetPostsQuery(options: Omit<Urql.UseQueryArgs<GetPostsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPostsQuery>({ query: GetPostsDocument, ...options });
};