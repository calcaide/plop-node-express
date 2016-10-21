import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/test', (req, res) => {
    res.send('This is a test');
});

app.listen(3000, () => {
    console.log('Example app, listening on port 3000!');
});

export default app;