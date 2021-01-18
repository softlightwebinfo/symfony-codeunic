import fetch from 'isomorphic-fetch'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: "http://localhost:9000/v1/graphql",
    fetch: fetch,
});

export default client;
