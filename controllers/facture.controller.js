const Facture = require ('../models/facture.model.js');
const fs = require('fs');
const Client = require ('../models/client.model.js');
exports.createFacture = (req, res) => {
    let facture = new Facture(
        {
    
            nom_du_client: req.body.nom_du_client,
            prestation_fournie: req.body.prestation_fournie,
           cout_horaire: req.body.cout_horaire,
           nbre_heure: req.body.nbre_heure,
           prixHT:req.body.prixHT,
            TVA: req.body.TVA,
            facturenb: req.body.facturenb,
            
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
        //Create Folder

        fs.mkdir('facture/'+${facture.nom_du_client}, (error) => {
            if(error) {
                console.log(error);
            }
            else {
                console.log("dossier créé");
            }
        });
        let facturetxt = `f00: ${facture.facturenb}\n, Nom_du_client: ${facture.nom_du_client}\n, date_de_creation: ${new Date().toLocaleString()}\n, Prestation_fournie: ${facture.prestation_fournie}\n, Nombre_heure: ${facture.nbre_heure}\n, Cout_horaire: ${facture.cout_horaire}\n, TVA: ${facture.tva}\n,  PrixHT: ${facture.prixHT}\n,`

        fs.writeFile('./facture/'+${facture.nom_du_client}+'/f00'+${facture.facturenb}+'.txt', facturetxt, (error) => {
	    if(error) {
		    console.log(error);
	    }
	    else {
		    console.log('fichier modifié');
	    }
});
    })
}

