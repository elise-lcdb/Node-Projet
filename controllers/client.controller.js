const Client = require ('../models/client.model.js');
const fs = require('fs');

exports.createClient = (req, res) => {
    let client = new Client(
        {
            nom: req.body.nom,
            prenom: req.body.prenom,
            adresse: req.body.adresse,
            cp: req.body.cp,
            ville: req.body.ville,
            referent: {
                nom: req.body.nom,
                prenom: req.body.prenom,
                poste: req.body.poste
            },
            telephone: req.body.telephone,
            mail: req.body.mail,
            prospect: req.body.prospect


        }
    );
    client.save((err) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("Client created");
        }
        res.send(client);
    })
}

exports.updateClient = (req, res) => {
    Client.findByIdAndUpdate(req.params.id,req.body, function (err, client) {
        if(err) {
            console.log(err);
        }
        else {
            console.log('updated')
        }
        res.send(client);
    })
}


exports.deleteClient = (req, res) => {
    Client.findByIdAndRemove(req.params.id, (err) => {
        if(err) {
            console.log(err);
        }
        res.send('Client successfully deleted');
    })
}
/*exports.deleteManyClients = (req, res) => {
    let deleteParam = {
        nom:req.params.nom
    }
    Client.deleteMany(deleteParam, (err) => {
        console.log(deleteParam);;

        if(err) {
            console.log(err);
        }

        console.log(req.params.nom);
        res.send('successfully');
    })
}*/
/*exports.updateManyClients = (req, res) => {
    Client.updateMany(
        { nom: req.params.data },
        { $set: { nom: req.params.newdata } },
        (err) => {
        if(err) {
            console.log(err);
        }

        console.log(req.params.nom);
        res.send('Clients updated');
    })
}*/

exports.getClients = (req, res ) => {
    Client.find((err, client) => {
        if(err) {
            console.log(err);
        }
        res.send(client);
    })
}

exports.getClient = function (req, res) {
    Client.findById(req.params.id, function (err, client) {
        if (err) return (client);
        res.send(client);
    });
};
if( req.params.nom_du_client == ""){
    res.send('erreur : veuillez remplir ....');
}
else{
    
    client.findOne({ nom : req.params.nom }, (err, client) => {
        if(err){
            console.log(err);
        }
        else{
            if(client == null){ 
                error = true;
                res.send('client n existe pas');
            }else{ 
                const path = `./Notes/${client.nom}/notes.txt`;
                if(fs.existsSync(path)){ 
                    fs.unlinkSync(path); 
                }
                res.send("Notes File deleted");
            }
        }
    });
}
