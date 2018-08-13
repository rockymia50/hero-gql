import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers';

const typeDefs = `
    type Hero {
        _id: ID
        name: String!
        alias : String! 
    }
    type Query {
        allHero:[Hero],
        alias: String!
    }
`;

// difference between String! and String is that String returns null for a empty field and String! error


export default makeExecutableSchema({
    typeDefs,
    resolvers

});