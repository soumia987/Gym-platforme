const express = require('express');
const router = express.Router();
const { LoginUser, SignUpUser } = require('../controllers/authControllers');


// Route pour la connexion classique (email/mot de passe)
router.post('/Login', LoginUser);
router.post('/Signup', SignUpUser);

module.exports = router;

