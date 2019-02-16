const Product = require ('../models/product.model.js');
const Sale = require ('../class/Class_product.js');

exports.createProduct = (req, res) => {
	let product = new Product(
		{
			productid: req.body.productid,
			productname: req.body.productname,
			productdescripion: req.body.productdescripion,
			productprice: req.body.productprice,
			producttva: req.body.producttva
		}
	);
	product.save( (err) => {
		if (err) {
			console.log(err);
		}

		else {
			console.log("Product created");
		}
		res.send('Product created' + product);
	})
}

exports.allProducts = (req, res) => {
	Product.find((err, product) => {
		if(err) {
			console.log(err);
		}
		res.send(product);
	})
}

exports.oneProduct = (req, res) => {
	Product.findById(req.params.id, (err, product) => {
		if(err) {
			console.log(err);
		}
		res.send(product);
	})
}

exports.removeProduct = (req, res) => {
	Product.findByIdAndRemove(req.params.id, (err, product) => {
		if(err) {
			console.log(err);
		}
		res.send("Product deleted");
	})
}

exports.updateProduct = (req, res) => {
	Product.findByIdAndUpdate(req.params.id, req.body, (err, product) => {
		if(err) {
			console.log(err);
		}
		res.send("Product modified");
	})
}
exports.calculateProduct = (req, res) => {
	Product.findById(req.params.id, (err, product) => {
		if(err) {
			console.log(err);
		}
		const mySale = new Sale(product.productprice, product.producttva);
		var calculated = mySale.calculateTaxe();
		res.send('The total is ' + calculated.toString());
	})
}
exports.deleteManyProducts = (req, res) => {
	let deleteParam = {
		productname: req.params.productname
	}
	Product.deleteMany(deleteParam, (err) => {
		console.log(deleteParam)
		if(err){
			console.log(err)
		}
		res.send('Product successfully deleted')
	})
}