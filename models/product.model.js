const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema (
	{
		productid: Number,
		productname: String,
		productdescripion: String,
		productprice: Number,
		producttva: Number
	}
);

module.exports = mongoose.model('Product', ProductSchema);