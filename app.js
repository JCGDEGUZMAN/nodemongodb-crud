import express from 'express';
import dbconnect from './database/connection.js';
import routes from './router/index.js';

//INITIAL CONFIGURATIONS
const PORT =  8000;

const app = express();

app.use(express.json({ 
    limit: "100mb", 
    extended: true 
}));

app.use(express.urlencoded({
    limit: "100mb", 
    extended: true
}));

//DATABASE CONNECTION
dbconnect
    .then(() => app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`)))
    .catch((error) => console.log(error.message))

//API ROUTES
app.get('/', (req, res) => {
    res.send('Node + MongoDB CRUD API Working!');
})

app.use('/api', routes);