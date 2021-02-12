const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
const schema = {
    "bookid":{
        type:Number,
        required:true,
        unique:true
    },
    "bookName":{
        type:String,
        required:true,
    },
    "price":{
        type:[
        {
            "sub_users":{   
            type:Number,
            required:true,
            },
            "non_sub_users":{
            type:Number,
            required:false,
            }       
        }
        ],
        default:[]
        },
    "authorName":{
        type:String,
        required:true,
    },
    "reference":{
        type:String,
        required:true,
        default:""
    } 
    
}
let bookSchema = mongoose.Schema(schema, { collection: 'Books', timestamps: true });
let connection = {};
connection.getCollection = async () => {
    let database = await mongoose.connect('mongodb://localhost:27017/Books', { useNewUrlParser: true });
    if (database) {
        return database.model("Books", bookSchema);
    }
    else {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    }
}
module.exports = connection;
