const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClientSchema = new Schema ({
    nom: String,
    prenom: String,
    adresse: String,
    cp: Number,
    ville: String,
    referent: {
    	nom: String,
    	prenom: String,
    	poste: String,
    },
    telephone: String,
    mail: String,
    prospect: String
    
});

module.exports = mongoose.model('Client', ClientSchema);
