const Facture = require ('../models/facture.model.js');
const fs = require('fs');

exports.createClient = (req, res) => {
    let facture = new Facture(
        {
    
            nom_du_client: req.body.nom_du_client,
            prestation_fournie: req.body.prestation_fournie,
           cout_horaire: req.body.cout_horaire,
           nbre_heure: req.body.nbre_heure,
           prixHT:req.body.prixHT,
            TVA: req.body.TVA,
            
        }
    );
    facture.save((err) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("Facture created");
        }
        res.send(facture);
    })
}
