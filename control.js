const productmodel=require('./model');

//add product
module.exports.addproduct=async function addproduct(req, res){
    try{
        let obj=req.body;
        let product= await productmodel.create(obj);
        if (product){
            res.send({message:'product created', data:product});
        }
        else{
            res.send('give valid input');
        }
    }
    catch(err){
        res.status(500).send({error:'internal error'});
    }
}

//retrive product by id
module.exports.getproduct= async function getproduct(req,res){
    try{
        const id= req.params.id;
        const product =await productmodel.findById(id);
        if(product){
            res.send(product);
        }
        else{
            res.status(404).send({error:'product not found'});
        }
    }
    catch(err){
        res.status(500).send({error:'server error'});
    }
}

module.exports.updateprice=async function updatedprice(req,res){
    try{
        const id=req.params.id;
        const updatedprice=req.body.price;
        const product = await productmodel.findByIdAndUpdate(id, {price: updatedprice});
        if(product){
            res.send({message:'price updated successfully'});
        }
        else{
            res.status(404).send({error: 'product not found'});
        }
    }
    catch(err){
        res.status(500).send({error:'server error'});
    }
}