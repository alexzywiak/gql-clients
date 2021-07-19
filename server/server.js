var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

const PEOPLE = new Map();
const POSTS = new Map();

class Post {
  constructor(data) {
    Object.assign(this, data);
  }
  get author() {
    return PEOPLE.get(this.authorId);
  }
}

class Person {
  constructor(data) {
    Object.assign(this, data);
  }
  get posts() {
    return [...POSTS.values()].filter((post) => post.authorId === this.id);
  }
}

const initializeData = () => {
  const fakePeople = [
    { id: "1", firstName: "John", lastName: "Doe" },
    { id: "2", firstName: "Jane", lastName: "Doe" },
  ];

  fakePeople.forEach((person) => PEOPLE.set(person.id, new Person(person)));

  const fakePosts = [
    { id: "1", authorId: "1", body: "Hello world" },
    { id: "2", authorId: "2", body: "Hi, planet!" },
  ];

  fakePosts.forEach((post) => POSTS.set(post.id, new Post(post)));
};

initializeData();

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    posts: [Post]
    post(id: ID): Post
    authors: [Person]
    author(id: ID): Person
  }

  type Post {
    id: ID
    author: Person
    body: String
  }

  type Person {
    id: ID
    posts: [Post]
    firstName: String
    lastName: String
  }
`);

// The root provides a resolver function for each API endpoint
const rootValue = {
  posts: () => POSTS.values(),
  post: ({ id }) => POSTS.get(id),
  authors: () => PEOPLE.values(),
  author: ({ id }) => PEOPLE.get(id),
};

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
