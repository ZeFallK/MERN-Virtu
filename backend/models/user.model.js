const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Nom de l'utilisateur
    email: { type: String, required: true, unique: true }, // Email
}, {
    timestamps: true, // Ajoute les champs createdAt et updatedAt automatiquement
});

module.exports = mongoose.model('User', userSchema);
