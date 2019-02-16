module.exports = class Sale {

	constructor(price, tva) {
		this.price = parseFloat(price);
		this.tva = parseFloat(tva);
	}

	calculateTaxe() {
		return (this.price + (this.price * this.tva / 100));
	}
}