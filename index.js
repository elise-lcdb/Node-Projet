const express = require('express');
const mongoose = require('mongoose');
const ClientController = require ('./controllers/client.controller.js');
const bodyParser = require('body-parser');
const app = express();
var path = require('path');
const port = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
mongoose.connect('mongodb://admin:A12345@ds155663.mlab.com:55663/node-projet', (err) => {
	if(err) {
		console.log('Database not found');
	}
	else {
		console.log('Database connected');
	}
})

app.post('/api/v1/clients/productcreated', ClientController.createClient);
app.get('/api/v1/clients', ClientController.getClients);
app.get('/api/v1/clients/:id', ClientController.getClient);
app.get('/api/v1/clients/remove/:id', ClientController.deleteClient);
app.put('/api/v1/clients/:id', ClientController.updateClient);


app.listen(port, () => {
	console.log(`Server on on port ${port}`);
})