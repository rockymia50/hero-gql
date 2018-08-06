import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers';

const typeDefs = `
    type Query {
        name: String!
        alias(heroName: String!) : String 
    }

`
// difference between String! and String is that String returns null for a empty field and String! error


export default makeExecutableSchema({
    typeDefs,
    resolvers

});