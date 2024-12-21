const express = require('express');
const router = express.Router();
const { getUsers, createUser, deleteUser } = require('../controllers/user.controllers');

// Récupérer tous les utilisateurs
router.get('/', getUsers);

// Ajouter un nouvel utilisateur
router.post('/', createUser);

// Supprimer un utilisateur par son ID
router.delete('/:id', deleteUser);

module.exports = router;
