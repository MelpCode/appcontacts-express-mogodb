
const Contact = require('../model/Contact')
const contactCtrl = {}


contactCtrl.main = (req,res)=>{
    res.render('index',{status:false})
};

contactCtrl.saveContact = async (req,res)=>{
    const contact = new Contact(req.body);
    await contact.save();
    console.log('Contact Added Successfully');
    res.render('index',{
        status:true
    });
};

contactCtrl.getContacts = async(req,res)=>{
    const contacts =  await Contact.find();
    res.render('listcontacts',{
        contacts,
    });
};

contactCtrl.deleteContact = async(req,res)=>{
    const {id} = req.params;
    await Contact.remove({_id:id});
    res.redirect('/listcontacts');
};

contactCtrl.editContact = async(req,res)=>{
    const {id} = req.params;
    const contact = await Contact.findById(id)
    res.render('editcontact',{
        contact
    });
};

contactCtrl.updateContact = async(req,res)=>{
    const {id} = req.params;
    await Contact.update({_id:id},req.body);
    res.redirect('/listcontacts');
}

module.exports = contactCtrl;