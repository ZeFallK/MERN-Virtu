import React from 'react';
import API from '../api';

const UserList = ({ users, onDelete }) => {
  // Fonction pour gérer la suppression d'un utilisateur
  const handleDelete = async (id) => {
    try {
      await API.delete(`/${id}`); // Supprime l'utilisateur via l'API
      onDelete(id); // Supprime l'utilisateur de l'état local
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur :', error);
    }
  };

  return (
    <div>
      <h2 className="mb-3">Liste des Utilisateurs</h2>
      <ul className="list-group">
        {users.map(user => (
          <li key={user._id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              <strong>{user.name}</strong> ({user.email})
            </span>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(user._id)}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
