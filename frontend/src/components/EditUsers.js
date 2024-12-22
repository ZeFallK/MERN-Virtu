import React, { useState } from 'react';
import API from '../api';

const EditUser = ({ user, onUpdate, onCancel }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.put(`/${user._id}`, { name, email });
      onUpdate(response.data); // Met à jour l'utilisateur dans la liste
      onCancel(); // Ferme le formulaire d'édition
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="mb-3">Modifier l'Utilisateur</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-success me-2">
        Enregistrer
      </button>
      <button type="button" className="btn btn-secondary" onClick={onCancel}>
        Annuler
      </button>
    </form>
  );
};

export default EditUser;
