const mongoose = require('mongoose');

// Vérifier si l'URL de connexion est définie
if (!process.env.MONGO_URI) {
  console.error('MONGO_URI est introuvable dans les variables d\'environnement.');
  process.exit(1);
}

const url = process.env.MONGO_URI;
console.log('MONGODB_URI:', process.env.MONGODB_URI);


const connectDB = async () => {
  try {
    console.log('Tentative de connexion à MongoDB...');
    await mongoose.connect(url);
    console.log('Connexion à MongoDB réussie');
  } catch (error) {
    console.error('Échec de la connexion à MongoDB :', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;


