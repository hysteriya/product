const mongoose=require('mongoose');
mongoose.set('strictQuery', true);

const link='mongodb+srv://admin:a4CoRcYRGgSXDirv@cluster0.9pe7t0q.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(link)
.then(function(db){
    console.log('db connected')
})
.catch(function(err){
    console.log(err);
});

const productschema=mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required:true
    }
});

const productmodel= mongoose.model('productmodel', productschema);

module.exports= productmodel;