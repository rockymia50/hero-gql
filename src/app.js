import express from 'express';
import graphqlHTTP from 'express-graphql';

const app = express();
const PORT = 3000;

const schema = {};
app.use('/graphql', graphqlHTTP ({
    graphiql: true,
    schema

}));

app.get('/', (request, response) => {
    return response.json({
        msg: 'Howdy Ho'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT $(PORT)`);
});