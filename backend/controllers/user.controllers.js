const User = require('../models/user.model');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs.' });
    }
};

const createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const newUser = new User({ name, email });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de la création de l\'utilisateur.' });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, email },
            { new: true } 
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'Utilisateur non trouvé.' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur.' });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: 'Utilisateur supprimé.' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur.' });
    }
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
