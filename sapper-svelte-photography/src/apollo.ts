import fetch from 'isomorphic-fetch'
import ApolloClient, { InMemoryCache } from 'apollo-boost'

const client = new ApolloClient({
    uri: "https://hasura.photostame.com/v1/graphql",
    fetch: fetch,
    headers: {
        'x-hasura-admin-secret': "myadminsecretkey",
    },
    cache: new InMemoryCache(),
});

export default client;
