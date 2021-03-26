const addContact = (req, res) => {
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

};

module.exports = controllers={addContact}
