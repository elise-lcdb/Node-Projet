const express = require('express');
const mongoose = require('mongoose');
const ClientController = require ('./controllers/client.controller.js');
const FactureController = require ('./controllers/facture.controller.js');
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

app.post('/api/v1/clients/clientcreated', ClientController.createClient);
app.get('/api/v1/clients', ClientController.getClients);
app.get('/api/v1/clients/:id', ClientController.getClient);
app.get('/api/v1/clients/remove/:id', ClientController.deleteClient);
app.put('/api/v1/clients/:id', ClientController.updateClient);
app.get('/api/v1/clients/CA', ClientController.getCA);

app.get('/api/v1/factures', (req, res) => {
	res.render('factures.html');
});
app.post('/api/v1/post', FactureController.createProduct);
app.post('/api/v1/post2', (req,res) => {
    if(req.body.clientnom){
		fs.mkdir('notes/'+req.body.clientnom, (error) => {
			     if(error) {
			         console.log(error);
			     }
			     else {
			         console.log("dossier créé");
			     }
			 });
			 let note = 'Client: '+ req.body.clientnom +'\n'+'Commentaire 1:'+req.body.clientnote+'\n'+'Commentaire 2:'+req.body.client2note;
			 fs.writeFile('./notes/'+req.body.clientnom+'/notes.txt', note, (error) => {
				 if(error) {
				     console.log(error);
				 }
				 else {
				     console.log(note);
				 }
			 res.send(`Thank you`);
			
	})
}});
app.get('/api/v1/notes/:name/vider', (res, req) => {
	if(req.params.name){
		fs.writeFile('./notes/'+req.params.name+'/notes.txt', '', (error) =>{
			if(error) {
				console.log(error);
			}
			else {
				console.log('fichier modifié');
			}
		}
		
		)
	}
})
app.listen(port, () => {
	console.log(`Server on on port ${port}`);
})