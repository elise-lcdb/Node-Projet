const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs = require('fs');

let FactureSchema = new Schema ({
    nom_du_client: String,
    prestation_fournie: String,
    cout_horaire: Number,
    nbre_heure:Number,
    prixHT: Number,
   TVA: Number,
   facturenb: Number,
    
});
//Calcul TTC
FactureSchema.method({
    calculateTaxe: function () {
        const calcule = this.cout_horaire *  this.nobre_heures;
        const calcule = this.prixHT+ (this.prixHT *  this.TVA / 100);
        var text = "Nom du Client : " + this.nom_du_client + " => prix HT : " + this.prixHT + " => taux de TVA : " + this.TVA + " => prix TTC : " + calcule + " (" +new Date() + ")";

        fs.appendFile("./tmp/log.txt", text, function(err) {
        if(err) {
            console.log(err);
        }

        console.log("The file was saved!");
        }); 
        return text;
        
    }
});







module.exports = mongoose.model('Facture', FactureSchema);



 


