import React, { useState } from 'react';
import API from '../api';

const AddUser = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/', { name, email });
      onAdd(response.data); // Ajoutez l'utilisateur à la liste
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'utilisateur:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="mb-3">Ce site a été réalisé par Alpha (TD44), Yanis, Ibrahim et Matthis (TD45)</h2>
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
      <button type="submit" className="btn btn-primary w-100">
        Ajouter
      </button>
    </form>
  );
};


export default AddUser;
