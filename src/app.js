import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';


const app = express();
const PORT = 3000;


app.use('/graphql', graphqlHTTP ({
    graphiql: true,
    schema,
    context:{
        userId: 1
    }

}));

app.get('/', (request, response) => {
    return response.json({
        msg: 'Howdy Ho'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT $(PORT)`);
});