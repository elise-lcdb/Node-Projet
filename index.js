const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// connection to databse mongo
mongoose.connect(dbConfig.url,{ useNewUrlParser: true }, (err) => {
    if(err) {
        console.log('database not connected');
    }
    else{
        console.log('database connected');
    }
});

app.post(`/${serverConfig.rootUrl}/${serverConfig.version}/clients`, clientController.createClient);
app.get(`/${serverConfig.rootUrl}/${serverConfig.version}/clients`, clientController.getClients);
app.put(`/${serverConfig.rootUrl}/${serverConfig.version}/clients/:id`,clientController.updateClient);
app.delete(`/${serverConfig.rootUrl}/${serverConfig.version}/clients/:id`,clientController.deleteClient);

const port = serverConfig.port;

app.listen(port, () => {
    console.log(`server on port ${port}`);
});