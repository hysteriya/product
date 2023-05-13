const express=require('express');
const router=express.Router();
const {getproduct, updateprice, addproduct}=require('./control');

router
.route('/:id')
.get(getproduct)
.patch(updateprice);

router
.route('/addproduct')
.post(addproduct);

module.exports=router;