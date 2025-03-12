const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./models/User');  
// Route pour la connexion classique (email/mot de passe)
exports.loginUser = async (req, res) => {
  try {
    // Vérifier si l'utilisateur existe
    const User = await User.findOne({ email :req.body.email });
    if (!User) return res.status(400).json({ message: 'Utilisateur non trouvé' });
    // Vérifier le mot de passe
    const isMatch = await User.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Mot de passe incorrect' });

    // Générer un JWT
    const token = jwt.sign({ id: User._id }, 'votre_clé_secrète', { expiresIn: '1h' });

    // Retourner le token au frontend
    res.json({ token });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};

// Route pour l'inscription d'un nouvel utilisateur
exports.signUpUser = async (req, res) => {

  try {
    // Vérifier si l'utilisateur existe déjà
    const userExists = await User.findOne({ gmail: req.body.gmail });
    if (userExists) {
      return res.status(400).json({ message: 'Utilisateur déjà existant' });
    }

    // Créer un nouvel utilisateur
    const user = new User(req.body);

    // Sauvegarder l'utilisateur dans la base de données
    console.log(req.body);
    await User.save();

    // Générer un JWT
    const token = jwt.sign({ id: user._id }, 'votre_clé_secrète', { expiresIn: '1h' });

    // Retourner le token au frontend
    res.status(201).json({ token });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};
