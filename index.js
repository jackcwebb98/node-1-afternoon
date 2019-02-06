const express = require('express');
const bodyParser = require('body-parser');
const messages_controller = require('./server/controller/messages_controller')

const app = express();

app.use(express.static('public/build'))
app.use(bodyParser.json());


app.post(`/api/messages`, messages_controller.create);


app.get(`/api/messages`, messages_controller.read);


app.put(`/api/messages/:id`, messages_controller.update);


app.delete(`/api/messages/:id`, messages_controller.delete);









app.listen(3001, () => console.log(`all's good partner`))