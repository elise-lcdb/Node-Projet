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