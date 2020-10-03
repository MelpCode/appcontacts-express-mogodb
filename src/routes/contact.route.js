const express = require('express');
const router = express.Router();

const contactCtrl = require('../controllers/contact.controllers')

router.get('/',contactCtrl.main)
router.post('/add',contactCtrl.saveContact)

router.get('/listcontacts',contactCtrl.getContacts)
router.get('/delete/:id',contactCtrl.deleteContact)
router.get('/edit/:id',contactCtrl.editContact)
router.post('/edit/:id',contactCtrl.updateContact)

module.exports = router;