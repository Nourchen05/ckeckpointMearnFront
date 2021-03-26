//require express

const express = require("express");
const Contact = require("../Contact");

//routes

const router = express.Router();

//require contact model
const Constact = require("../models/Contact");

//require controllers
const controllers=require('../controllers/contact.controller')

//-----------------Routes-----------------

/**
 *@desc:test route
 *@path:'http://localhost:7000/api/contacts/test'
 *@method:GET
 *@data:no data
 *@acess:public
 */
router.get("/test", (req, res) => {
  res.send("Hello test");
});
/**
 *@desc:add contact
 *@path:'http://localhost:7000/api/contacts'
 *@method:POST
 *@data:req.body
 *@acess:public
 */
router.post("/", (req, res) => {
  try {
    const {name,email,phone}=req.body
    
    //mail and name required
    if(!name || !email){
      res.status(400).send({ msg: "Name and email are required..." });
      return 
    }

    // email is unique
 const contact =Contact.findOne({email})
 if (contact){
   res.status(400).send({msg:'Contact already exist !'})
   return
 }

    const newContact = new Contact({
      name,
      email,
      phone,
    });
    await newContact.save();
    res.status(200).send({ msg: "Contact added succefully ...", newContact });
  } catch (error) {
    res.status(400).send({ msg: "Can not add new contact...", error });
  }

});

/**
 *@desc:get all contacts
 *@path:'http://localhost:7000/api/contacts'
 *@method:POST
 *@data:req.body
 *@acess:public
 */

 router.get('/',async(req,res)=>{
   try {
     const listContacts=await Contact.find()
     res.status(200).send({mgs:'this is the list of contacts...',listContacts});
   } catch (error) {
     res.status(400).send({mgs:'can not get all contacts ...',error});
   }
 })

 /**
 *@desc:get one contact
 *@path:'http://localhost:7000/api/contacts/:id'
 *@method:POST
 *@data:req.body
 *@acess:public
 */
router.get('/:id',async(req,res)=>{
  try {
    const contactToFind=await Contact.findOne({_id:req.params.id})
    res.status(200).send({msg:"I get the contact ...",contactToFind})
  } catch (error) {
    res.status(400).send({msg:"I cannot get the contact with tis id ...",error})
  }
})

/**
 *@desc:delete contact
 *@path:'http://localhost:7000/api/contacts/:id'
 *@method:DELETE
 *@data:req.body
 *@acess:public
 */
router.delete('/:_id',async(req,res)=>{
  try {
    const {_id} = req.params
    const contactToDelete=await Contact.findOneAndDelete({_id})
    if(!contactToDelete){
        res.status(400).send({msg:'Contact already deleted !'})
        return
    }
    res.status(200).send({msg:'Contact is deleted ...',contactToDelete})
  
  } catch (error) {
    res.status(400).send({msg:'Can not delete contact with this id',error})
  }
})

/**
 *@desc:update contact
 *@path:'http://localhost:7000/api/contacts/:id'
 *@method:UPDATE
 *@data:req.body
 *@acess:public
 */
router.put('/:_id',async(req,res)=>{
  try {
    const {_id}=req.paramsconst 
    result=await Contact.updateOne({_id},{$set:{...req.body}})
    console.log(result)
    if(result.nModified){
      res.status(400).send({msg:'Contact is updated !'})
    }
    res.status(200).send({msg:'Contact is updated !'})
  } catch (error) {
    res.status(400).send({msg:'Can not update contact with this id !',error})
  }
})



module.exports = router;











