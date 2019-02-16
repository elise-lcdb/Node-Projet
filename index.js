const express = require('express');
const mongoose = require('mongoose');
const ProductController = require ('./controllers/product.controller.js');
const bodyParser = require('body-parser');
const app = express();
var path = require('path');
const port = 3000;
const Sale = require ('./class/Class_product.js');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
mongoose.connect('mongodb://elise:a0a0a0@ds119734.mlab.com:19734/nodejs-dev-1', (err) => {
	if(err) {
		console.log('Database not found');
	}
	else {
		console.log('Database connected');
	}
})

app.get('/', (req, res) => {
	res.render('hello.html');
});
app.get('/:name', function(req, res){
   res.render('helloname.html', {
   	name: req.params.name
   });
});
app.get('/api/v1/addproduct', (req, res) => {
	res.render('addproduct.html');
});
app.post('/api/v1/products/productcreated', ProductController.createProduct);
app.get('/api/v1/products', ProductController.allProducts);
app.get('/api/v1/products/:id', ProductController.oneProduct);
app.get('/api/v1/products/remove/:id', ProductController.removeProduct);
app.put('/api/v1/products/:id', ProductController.updateProduct);
app.get('/api/v1/products/:id/calculate-sale', ProductController.calculateProduct);


app.listen(port, () => {
	console.log(`Server on on port ${port}`);
})