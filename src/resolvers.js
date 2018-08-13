export const resolvers = {
    /* root= returns the result of the query from the parent value
        args= takes in arguments
        context = share the object w/ each resolver method
        info = get info about GraphQL */

    Query: {
        // name (root, args, context, info){
        //     return 'Clark Kent';
        // },
        alias(root, {heroName}, context, info){
            console.log (info);
            return heroName;
        },

    },

};